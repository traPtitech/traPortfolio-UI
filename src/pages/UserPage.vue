<script lang="ts" setup>
import PageContainer from '/@/components/Layout/PageContainer.vue'
import BioContainer from '/@/components/User/BioContainer.vue'
import GroupsContainer from '/@/components/User/GroupsContainer.vue'
import ProjectsContainer from '/@/components/User/ProjectsContainer.vue'
import ContestsContainer from '/@/components/User/ContestsContainer.vue'
// import EventsContainer from '/@/components/User/EventsContainer.vue'
import UserDetailContainer from '/@/components/User/UserDetailContainer.vue'
import apis from '/@/lib/apis'
import useParam from '/@/lib/param'
import { onMounted } from 'vue'

const userUId = useParam('userId')
// uuid
const userId = (await apis.getUsers(undefined, userUId.value)).data[0]?.id ?? ''

const [
  { data: userDetail },
  { data: userProjects },
  { data: userContests },
  { data: userGroups }
] = await Promise.all([
  apis.getUser(userId),
  apis.getUserProjects(userId),
  apis.getUserContests(userId),
  apis.getUserGroups(userId)
])
// const userEvents = (await apis.getUserEvents(userId.value)).data

onMounted(() => {
  document.title = `${userDetail.name} | traPortfolio`
})
</script>

<template>
  <page-container
    :paths="[
      { name: 'Users', link: { name: 'Users' } },
      {
        name: userDetail.name,
        link: { name: 'User', params: { userId: userId } }
      }
    ]"
  >
    <div :class="$style.container">
      <user-detail-container :user-detail="userDetail" />
      <bio-container :bio="userDetail.bio" />
      <groups-container :groups="userGroups" />
      <projects-container :projects="userProjects" />
      <contests-container :contests="userContests" />
      <!-- <events-container :class="$style.eventsContainer" :events="userEvents" /> -->
    </div>
  </page-container>
</template>

<style lang="scss" module>
.container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
</style>

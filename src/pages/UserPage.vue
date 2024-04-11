<script lang="ts" setup>
import PageContainer from '/@/components/Layout/PageContainer.vue'
import BioContainer from '/@/components/User/BioContainer.vue'
import GroupsContainer from '/@/components/User/GroupsContainer.vue'
import ContestsContainer from '/@/components/User/ContestsContainer.vue'
// import EventsContainer from '/@/components/User/EventsContainer.vue'
import UserDetailContainer from '/@/components/User/UserDetailContainer.vue'
import apis from '/@/lib/apis'
import useParam from '/@/lib/param'

const userId = useParam('userId')
const userDetail = (await apis.getUser(userId.value)).data
const userProjects = (await apis.getUserProjects(userId.value)).data
const userContests = (await apis.getUserContests(userId.value)).data
const userGroups = (await apis.getUserGroups(userId.value)).data
// const userEvents = (await apis.getUserEvents(userId.value)).data
</script>

<template>
  <page-container>
    <user-detail-container
      :class="$style.userInfoContainer"
      :user-detail="userDetail"
    />
    <bio-container :class="$style.bioContainer" :bio="userDetail?.bio" />
    <groups-container
      :class="$style.groupsContainer"
      :groups="userGroups"
      :projects="userProjects"
    />
    <contests-container
      :class="$style.contestsContainer"
      :contests="userContests"
    />
    <!-- <events-container :class="$style.eventsContainer" :events="userEvents" /> -->
  </page-container>
</template>

<style lang="scss" module>
.userInfoContainer {
  display: flex;
  align-items: center;
  margin: 4rem 0 2rem;
}

.bioContainer {
  margin-bottom: 2rem;
}

.groupsContainer {
  margin-bottom: 4rem;
}

.contestsContainer {
  margin-bottom: 4rem;
}

.eventsContainer {
  margin-bottom: 4rem;
}
</style>

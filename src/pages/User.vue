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
    <events-container :class="$style.eventsContainer" :events="userEvents" />
  </page-container>
</template>

<script lang="ts">
import { defineComponent, ref, watchEffect } from 'vue'
import apis, {
  ContestTeamWithContestName,
  Event,
  UserDetail,
  UserGroup,
  UserProject
} from '../lib/apis'
import useParam from '/@/use/param'
import PageContainer from '/@/components/Layout/PageContainer.vue'
import BioContainer from '/@/components/User/BioContainer.vue'
import GroupsContainer from '/@/components/User/GroupsContainer.vue'
import ContestsContainer from '/@/components/User/ContestsContainer.vue'
import EventsContainer from '/@/components/User/EventsContainer.vue'
import UserDetailContainer from '../components/User/UserDetailContainer.vue'

export default defineComponent({
  name: 'User',
  components: {
    PageContainer,
    BioContainer,
    GroupsContainer,
    ContestsContainer,
    EventsContainer,
    UserDetailContainer
  },
  setup() {
    const userId = useParam('userId')
    const userDetail = ref<UserDetail>()
    watchEffect(async () => {
      userDetail.value = (await apis.getUser(userId.value)).data
    })

    const userProjects = ref<UserProject[]>()
    watchEffect(async () => {
      userProjects.value = (await apis.getUserProjects(userId.value)).data
    })

    const userContests = ref<ContestTeamWithContestName[]>()
    watchEffect(async () => {
      userContests.value = (await apis.getUserContests(userId.value)).data
    })

    const userGroups = ref<UserGroup[]>()
    watchEffect(async () => {
      userGroups.value = (await apis.getUserGroups(userId.value)).data
    })

    const userEvents = ref<Event[]>()
    watchEffect(async () => {
      userEvents.value = (await apis.getUserEvents(userId.value)).data
    })
    return {
      userDetail,
      userProjects,
      userContests,
      userGroups,
      userEvents
    }
  }
})
</script>

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

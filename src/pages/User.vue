<template>
  <page-container>
    <user-info-container
      :class="$style.userInfoContainer"
      :user-detail="userDetail"
      :accounts="accounts"
    />
    <bio-container :class="$style.bioContainer" :bio="bio" />
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
import { computed, ref, defineComponent, watchEffect } from 'vue'
import apis, {
  ContestTeamWithContestName,
  UserDetail,
  UserGroup,
  UserProject,
  Event
} from '../lib/apis'
import useParam from '/@/use/param'
import PageContainer from '/@/components/Layout/PageContainer.vue'
import BioContainer from '/@/components/User/BioContainer.vue'
import GroupsContainer from '/@/components/User/GroupsContainer.vue'
import ContestsContainer from '/@/components/User/ContestsContainer.vue'
import EventsContainer from '/@/components/User/EventsContainer.vue'
import UserInfoContainer from '../components/User/UserInfoContainer.vue'

export default defineComponent({
  name: 'User',
  components: {
    PageContainer,
    BioContainer,
    GroupsContainer,
    ContestsContainer,
    EventsContainer,
    UserInfoContainer
  },
  setup() {
    const userId = useParam('userId')
    const userDetail = ref<UserDetail>()
    const userProjects = ref<UserProject[]>()
    const userContests = ref<ContestTeamWithContestName[]>()
    const userGroups = ref<UserGroup[]>()
    const userEvents = ref<Event[]>()

    watchEffect(async () => {
      userDetail.value = (await apis.getUser(userId.value)).data
      userProjects.value = (await apis.getUserProjects(userId.value)).data
      userContests.value = (await apis.getUserContests(userId.value)).data
      userGroups.value = (await apis.getUserGroups(userId.value)).data
      userEvents.value = (await apis.getUserEvents(userId.value)).data
    })

    const bio = computed(() => userDetail.value?.bio ?? 'Loading ...')
    const accounts = computed(() => userDetail.value?.accounts)

    return {
      bio,
      accounts,
      userId,
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

<template>
  <page-container>
    <user-detail-container
      v-if="fetcherStateUserDetail === 'loaded'"
      :class="$style.userInfoContainer"
      :user-detail="userDetail"
    />
    <p v-else>{{ fetcherStateUserDetail }}</p>
    <bio-container
      v-if="fetcherStateUserDetail === 'loaded'"
      :class="$style.bioContainer"
      :bio="userDetail?.bio"
    />
    <p v-else>{{ fetcherStateUserDetail }}</p>
    <groups-container
      v-if="fetcherStateUserGroups === 'loaded'"
      :class="$style.groupsContainer"
      :groups="userGroups"
      :projects="userProjects"
    />
    <p v-else>{{ fetcherStateUserGroups }}</p>
    <contests-container
      v-if="fetcherStateUserContests === 'loaded'"
      :class="$style.contestsContainer"
      :contests="userContests"
    />
    <p v-else>{{ fetcherStateUserContests }}</p>
    <events-container
      v-if="fetcherStateUserEvents === 'loaded'"
      :class="$style.eventsContainer"
      :events="userEvents"
    />
    <p v-else>{{ fetcherStateUserEvents }}</p>
  </page-container>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import apis from '../lib/apis'
import useParam from '/@/use/param'
import PageContainer from '/@/components/Layout/PageContainer.vue'
import BioContainer from '/@/components/User/BioContainer.vue'
import GroupsContainer from '/@/components/User/GroupsContainer.vue'
import ContestsContainer from '/@/components/User/ContestsContainer.vue'
import EventsContainer from '/@/components/User/EventsContainer.vue'
import UserDetailContainer from '../components/User/UserDetailContainer.vue'
import useUserDataFetcher from '/@/use/userDataFetcher'

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
    const {
      data: userDetail,
      fetcherState: fetcherStateUserDetail
    } = useUserDataFetcher(userId, apis.getUser)

    const {
      data: userProjects,
      fetcherState: fetcherStateUserProjects
    } = useUserDataFetcher(userId, apis.getUserProjects)

    const {
      data: userContests,
      fetcherState: fetcherStateUserContests
    } = useUserDataFetcher(userId, apis.getUserContests)

    const {
      data: userGroups,
      fetcherState: fetcherStateUserGroups
    } = useUserDataFetcher(userId, apis.getUserGroups)

    const {
      data: userEvents,
      fetcherState: fetcherStateUserEvents
    } = useUserDataFetcher(userId, apis.getUserEvents)

    return {
      userDetail,
      fetcherStateUserDetail,
      userProjects,
      fetcherStateUserProjects,
      userContests,
      fetcherStateUserContests,
      userGroups,
      fetcherStateUserGroups,
      userEvents,
      fetcherStateUserEvents
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

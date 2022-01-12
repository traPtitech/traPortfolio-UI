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
import useDataFetcher from '../use/dataFetcher'

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
    } = useDataFetcher(async () => (await apis.getUser(userId.value)).data)

    const {
      data: userProjects,
      fetcherState: fetcherStateUserProjects
    } = useDataFetcher(
      async () => (await apis.getUserProjects(userId.value)).data
    )

    const {
      data: userContests,
      fetcherState: fetcherStateUserContests
    } = useDataFetcher(
      async () => (await apis.getUserContests(userId.value)).data
    )

    const {
      data: userGroups,
      fetcherState: fetcherStateUserGroups
    } = useDataFetcher(
      async () => (await apis.getUserGroups(userId.value)).data
    )

    const {
      data: userEvents,
      fetcherState: fetcherStateUserEvents
    } = useDataFetcher(
      async () => (await apis.getUserEvents(userId.value)).data
    )

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

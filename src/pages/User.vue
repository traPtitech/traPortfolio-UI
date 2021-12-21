<template>
  <page-container>
    <router-link :class="$style.titleContainer" :to="`/users/${userId}`">
      <img :class="$style.icon" :src="iconSrc" />
      <div>
        <div :class="$style.nameContainer">
          <div :class="$style.name">{{ name }}</div>
          <div :class="$style.realName">{{ realName }}</div>
        </div>
        <div :class="$style.accounts">
          <account-list :accounts="accounts" />
        </div>
      </div>
    </router-link>
    <div :class="$style.bioContainer">
      <bio-container :class="$style.bioContainer" :bio="bio" />
    </div>
    <div :class="$style.groupsContainer">
      <groups-container
        :class="$style.groupsContainer"
        :groups="userGroups"
        :projects="userProjects"
      />
    </div>
    <div :class="$style.contestsContainer">
      <contests-container
        :class="$style.contestsContainer"
        :contests="userContests"
      />
    </div>
    <div :class="$style.eventsContainer">
      <events-container :class="$style.eventsContainer" :events="userEvents" />
    </div>
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
import AccountList from '../components/User/AccountList.vue'

export default defineComponent({
  name: 'User',
  components: {
    PageContainer,
    BioContainer,
    GroupsContainer,
    ContestsContainer,
    EventsContainer,
    AccountList
  },
  setup() {
    const userId = useParam('userId')
    const userDetail = ref<UserDetail>()
    const userProjects = ref<Array<UserProject>>()
    const userContests = ref<Array<ContestTeamWithContestName>>()
    const userGroups = ref<Array<UserGroup>>()
    const userEvents = ref<Array<Event>>()

    watchEffect(async () => {
      userDetail.value = (await apis.getUser(userId.value)).data
      userProjects.value = (await apis.getUserProjects(userId.value)).data
      userContests.value = (await apis.getUserContests(userId.value)).data
      userGroups.value = (await apis.getUserGroups(userId.value)).data
      userEvents.value = (await apis.getUserEvents(userId.value)).data
    })
    const iconSrc = computed(
      () =>
        `https://q.trap.jp/api/v3/public/icon/${
          /*userDetail.value.name*/ 'sappi_red'
        }`
    )

    const name = computed(() => userDetail.value?.name)
    const realName = computed(() => userDetail.value?.realName)
    const bio = computed(() => userDetail.value?.bio)
    const accounts = computed(() => userDetail.value?.accounts)

    return {
      iconSrc,
      name,
      realName,
      bio,
      accounts,
      userId,
      userProjects,
      userContests,
      userGroups,
      userEvents
    }
  }
})
</script>

<style lang="scss" module>
.titleContainer {
  display: flex;
  text-decoration: none;
  align-items: center;
  margin: 4rem 0 2rem;
}

.icon {
  height: 8rem;
  width: 8rem;
  margin-right: 2rem;
  border-radius: 50%;
}

.name {
  word-break: break-all;
  color: $color-primary;
  font-size: 3rem;
  margin-right: 2rem;
}

.realName {
  color: $color-text;
  font-size: 1.5rem;
  margin-right: 2rem;
}

.accounts {
  margin-top: 1rem;
}

.nameContainer {
  display: flex;
  align-items: center;
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

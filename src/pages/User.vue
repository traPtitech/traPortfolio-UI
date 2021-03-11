<template>
  <page-container>
    <router-link :class="$style.link" :to="`/users/${userId}`">
      <img :class="$style.icon" :src="iconSrc" />
      <div>
        <div :class="$style.name">
          {{ name }}<span :class="$style.realName">{{ realName }}</span>
        </div>
        <div>accounts</div>
      </div>
    </router-link>
    <bio-container :bio="bio" />
    <works-container :works="'何か'"/>
    <groups-container />
    <contests-container />
    <events-container />
  </page-container>
</template>

<script lang="ts">
import { computed, ref, defineComponent, watchEffect } from 'vue'
import apis, { ContestTeamWithContestName, UserDetail, UserGroup, UserProject } from '../lib/apis'
import useParam from '/@/use/param'
import PageContainer from '/@/components/Layout/PageContainer.vue'
import BioContainer from '/@/components/User/BioContainer.vue'
import WorksContainer from '/@/components/User/WorksContainer.vue'
import GroupsContainer from '/@/components/User/GroupsContainer.vue'
import ContestsContainer from '/@/components/User/ContestsContainer.vue'
import EventsContainer from '/@/components/User/EventsContainer.vue'

export default defineComponent({
  name: 'User',
  components: {
    PageContainer,
    BioContainer,
    WorksContainer,
    GroupsContainer,
    ContestsContainer,
    EventsContainer,
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

    return { iconSrc, name, realName, bio, accounts, userId, userProjects }
  }
})
</script>

<style lang="scss" module>
.link {
  display: flex;
  text-decoration: none;
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
}

.realName {
  color: $color-text;
  font-size: 1.5rem;
}
</style>

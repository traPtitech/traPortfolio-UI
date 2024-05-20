<script lang="ts" setup>
import { UserContest } from '/@/lib/apis'

interface Props {
  contests: UserContest[]
}

defineProps<Props>()
</script>

<template>
  <section>
    <h2 :class="$style.title">実績</h2>
    <ul :class="$style.contests">
      <li
        v-for="contest in contests"
        :key="contest.id"
        :class="$style.contest"
      >
        <router-link :to="`/contests/${contest.id}`" :class="$style.link">
          <div>{{ contest.name }}</div>
          <div :class="$style.detail">
            <div>チーム {{ contest.teams[0]?.name }}</div>
            <div>{{ contest.teams[0]?.result }}</div>
          </div>
        </router-link>
      </li>
    </ul>
  </section>
</template>

<style lang="scss" module>
.title {
  color: $color-text;
  font-size: 1.25rem;
}
.contests {
  display: flex;
  flex-direction: column;
  gap: 0.75em;
  list-style: none;
}
.contest {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}
.link {
  color: $color-text;
  text-decoration: none;
}
.detail {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  padding-left: 0.75rem;
  font-size: 0.875rem;
}
</style>

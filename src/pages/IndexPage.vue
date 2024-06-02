<script lang="ts" setup>
import GroupList from '/@/components/Index/GroupList.vue'
import RecentList from '/@/components/Index/RecentList.vue'
import { useGroupStore } from '/@/store/group'
import { useContestStore } from '/@/store/contest'
import { useProjectStore } from '/@/store/project'
import TopSection from '/@/components/Index/TopSection.vue'

const groupStore = useGroupStore()
const contestStore = useContestStore()
const projectStore = useProjectStore()

const groups = await groupStore.fetchGroups()
const contests = await contestStore.fetchContests()
const projects = await projectStore.fetchProjects()
</script>

<template>
  <div :class="$style.container">
    <div :class="$style.heading">
      <h1 :class="$style.h1">traPortfolio</h1>
      <p :class="$style.description">
        traPortfolioは東京工業大学デジタル創作同好会traPの部員のPortfolioです。
      </p>
    </div>
    <div :class="$style.traP">
      <img
        src="/@/assets/traP_logo_icon.svg"
        alt="traPのロゴ"
        height="120"
        width="120"
      />
      <section :class="$style.traPDescriptionContainer">
        <h2 :class="$style.h2">traPとは</h2>
        <p :class="$style.traPDescription">
          東京工業大学で活動するデジタル創作・プログラミング系サークルです。<br />
          ゲーム制作を中心に、アプリ、音楽（DTM）、グラフィック（イラスト、3Dモデル、ドット絵、動画）などのクリエイティブ活動の他、競技プログラミング（競プロ）やCTFも行っています。
        </p>
      </section>
    </div>
    <top-section
      title="実績一覧"
      description="traPの部員が活躍した外部のコンテストや大会の紹介です。"
      more-link="/contests"
    >
      <recent-list :items="contests" title="実績" path="contests" />
    </top-section>
    <top-section
      title="プロジェクト一覧"
      description="traP内でチームとなって長期開発された制作された制作物です。"
      more-link="/projects"
    >
      <recent-list :items="projects" title="プロジェクト" path="projects" />
    </top-section>
    <top-section
      title="班一覧"
      description="7つの班に分かれてそれぞれの活動を行っています。"
    >
      <group-list :groups="groups" :class="$style.groupName" />
    </top-section>
  </div>
</template>

<style lang="scss" module>
.container {
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  padding: 2.5rem;
}
.heading {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.25rem;
}
.h1 {
  font-size: 2.5rem;
  font-weight: bold;
  color: $color-primary;
}
.description {
  font-size: 1.5rem;
}
.traP {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4rem;
  padding: 1.25rem 3.75rem;
}
.traPDescriptionContainer {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}
.h2 {
  font-size: 1.5rem;
  font-weight: medium;
}
.traPDescription {
  max-width: 940px;
  font-size: 1.25rem;
}
</style>

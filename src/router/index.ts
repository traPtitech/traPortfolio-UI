import { defineAsyncComponent } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

const Index = defineAsyncComponent(() => import('/@/pages/Index.vue'))
const Search = defineAsyncComponent(() => import('/@/pages/Search.vue'))
const User = defineAsyncComponent(() => import('/@/pages/User.vue'))
const Groups = defineAsyncComponent(() => import('/@/pages/Groups.vue'))
const Group = defineAsyncComponent(() => import('/@/pages/Group.vue'))
const Projects = defineAsyncComponent(() => import('/@/pages/Projects.vue'))
const Project = defineAsyncComponent(() => import('/@/pages/Project.vue'))
const Events = defineAsyncComponent(() => import('/@/pages/Events.vue'))
const Event = defineAsyncComponent(() => import('/@/pages/Event.vue'))
const Contests = defineAsyncComponent(() => import('/@/pages/Contests.vue'))
const Contest = defineAsyncComponent(() => import('/@/pages/Contest.vue'))
const ContestTeam = defineAsyncComponent(
  () => import('/@/pages/ContestTeam.vue')
)

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index
  },
  {
    path: '/search',
    name: 'UserSearch',
    component: Search
  },
  {
    path: '/users',
    redirect: '/search'
  },
  {
    path: '/users/:userId',
    name: 'User',
    component: User
  },
  {
    path: '/groups',
    name: 'Groups',
    component: Groups
  },
  {
    path: '/groups/:groupId',
    name: 'Group',
    component: Group
  },
  {
    path: '/projects',
    name: 'Projects',
    component: Projects
  },
  {
    path: '/projects/:projectId',
    name: 'Project',
    component: Project
  },
  {
    path: '/events',
    name: 'Events',
    component: Events
  },
  {
    path: '/events/:eventId',
    name: 'Event',
    component: Event
  },
  {
    path: '/contests',
    name: 'Contests',
    component: Contests
  },
  {
    path: '/contests/:contestId',
    name: 'Contest',
    component: Contest
  },
  {
    path: '/contests/:contestId/:teamId',
    name: 'ContestTeam',
    component: ContestTeam
  }
]

export default createRouter({
  history: createWebHistory(),
  routes
})

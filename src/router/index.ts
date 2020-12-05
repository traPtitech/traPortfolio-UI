import { defineAsyncComponent } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import Loading from '/@/pages/Loading.vue'

const defineAsyncComponentWithLoading = (path: string) =>
  defineAsyncComponent({
    loader: () => import(path),
    loadingComponent: Loading
  })

const Index = defineAsyncComponentWithLoading('/@/pages/Index.vue')
const Search = defineAsyncComponentWithLoading('/@/pages/Search.vue')
const User = defineAsyncComponentWithLoading('/@/pages/User.vue')
const Groups = defineAsyncComponentWithLoading('/@/pages/Groups.vue')
const Group = defineAsyncComponentWithLoading('/@/pages/Group.vue')
const Projects = defineAsyncComponentWithLoading('/@/pages/Projects.vue')
const Project = defineAsyncComponentWithLoading('/@/pages/Project.vue')
const Events = defineAsyncComponentWithLoading('/@/pages/Events.vue')
const Event = defineAsyncComponentWithLoading('/@/pages/Event.vue')
const Contests = defineAsyncComponentWithLoading('/@/pages/Contests.vue')
const Contest = defineAsyncComponentWithLoading('/@/pages/Contest.vue')
const ContestTeam = defineAsyncComponentWithLoading('/@/pages/ContestTeam.vue')

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

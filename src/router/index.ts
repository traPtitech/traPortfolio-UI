import { createRouter, createWebHistory } from 'vue-router'

const IndexPage = () => import('/@/pages/IndexPage.vue')
const Search = () => import('/@/pages/Search.vue')
const User = () => import('/@/pages/User.vue')
const GroupsPage = () => import('/@/pages/GroupsPage.vue')
const GroupPage = () => import('/@/pages/GroupPage.vue')
const Projects = () => import('/@/pages/Projects.vue')
const Project = () => import('/@/pages/Project.vue')
const EventsPage = () => import('/@/pages/EventsPage.vue')
const EventPage = () => import('/@/pages/EventPage.vue')
const ContestsPage = () => import('/@/pages/ContestsPage.vue')
const ContestPage = () => import('/@/pages/ContestPage.vue')
const ContestTeam = () => import('/@/pages/ContestTeam.vue')

const routes = [
  {
    path: '/',
    name: 'Index',
    component: IndexPage
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
    component: GroupsPage
  },
  {
    path: '/groups/:groupId',
    name: 'Group',
    component: GroupPage
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
    component: EventsPage
  },
  {
    path: '/events/:eventId',
    name: 'Event',
    component: EventPage
  },
  {
    path: '/contests',
    name: 'Contests',
    component: ContestsPage
  },
  {
    path: '/contests/:contestId',
    name: 'Contest',
    component: ContestPage
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

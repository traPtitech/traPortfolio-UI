import { createRouter, createWebHistory } from 'vue-router'

const IndexPage = () => import('/@/pages/IndexPage.vue')
const SearchPage = () => import('/@/pages/SearchPage.vue')
const UsersPage = () => import('/@/pages/SearchPage.vue')
const UserPage = () => import('/@/pages/UserPage.vue')
const GroupsPage = () => import('/@/pages/GroupsPage.vue')
const GroupPage = () => import('/@/pages/GroupPage.vue')
const ProjectsPage = () => import('/@/pages/ProjectsPage.vue')
const ProjectPage = () => import('/@/pages/ProjectPage.vue')
// const EventsPage = () => import('/@/pages/EventsPage.vue')
// const EventPage = () => import('/@/pages/EventPage.vue')
const ContestsPage = () => import('/@/pages/ContestsPage.vue')
const ContestPage = () => import('/@/pages/ContestPage.vue')
const ContestTeamPage = () => import('/@/pages/ContestTeamPage.vue')
const NotFound = () => import('/@/pages/NotFound.vue')

const routes = [
  {
    path: '/',
    name: 'Index',
    component: IndexPage
  },
  {
    path: '/search',
    name: 'UserSearch',
    component: SearchPage
  },
  {
    path: '/users',
    name: 'Users',
    component: UsersPage
  },
  {
    path: '/users/:userId',
    name: 'User',
    component: UserPage
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
    component: ProjectsPage
  },
  {
    path: '/projects/:projectId',
    name: 'Project',
    component: ProjectPage
  },
  // {
  //   path: '/events',
  //   name: 'Events',
  //   component: EventsPage
  // },
  // {
  //   path: '/events/:eventId',
  //   name: 'Event',
  //   component: EventPage
  // },
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
    path: '/contests/:contestId/teams/:teamId',
    name: 'ContestTeam',
    component: ContestTeamPage
  },
  {
    path: '/:path(.*)*',
    name: 'NotFound',
    component: NotFound
  }
]

export default createRouter({
  history: createWebHistory(),
  routes
})

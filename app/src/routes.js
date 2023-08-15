// routes.js
import { Home } from './pages/home';
import { Privacy } from './pages/privacy';
import { StayTuned } from './pages/stay-tuned';

export const routes = [
  { label: 'Home', link: '/', component: Home },
  { label: 'About Us', link: '/about-us', component: StayTuned },
  { label: 'Blog', link: '/blog', component: StayTuned },
  { label: 'Careers', link: '/careers', component: StayTuned },

  { label: 'Web Development', link: '/web-development', component: StayTuned },
  { label: 'eCommerce', link: '/ecommerce', component: StayTuned },
  { label: 'Design', link: '/design', component: StayTuned },
  { label: 'Management', link: '/management', component: StayTuned },
  { label: 'Marketing', link: '/marketing', component: StayTuned },

  { label: 'Sitemap', link: '/sitemap', component: StayTuned },

  { label: 'Terms', link: '/terms', component: StayTuned },
  { label: 'Privacy', link: '/privacy', component: Privacy },
];


export const navigation = [
  { label: 'Home', link: '/', visible: true, component: Home, icon: '' }
];

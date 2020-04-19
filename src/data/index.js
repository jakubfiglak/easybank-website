import BankingIcon from '../assets/icons/icon-online.inline.svg';
import BudgetIcon from '../assets/icons/icon-budgeting.inline.svg';
import OnboardingIcon from '../assets/icons/icon-onboarding.inline.svg';
import ApiIcon from '../assets/icons/icon-api.inline.svg';

export const menuItems = ['home', 'about', 'contact', 'blog', 'careers'];

export const featureCardsContent = [
  {
    icon: BankingIcon,
    title: 'Online Banking',
    text: 'Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world',
  },
  {
    icon: BudgetIcon,
    title: 'Simple Budgeting',
    text: `See exactly where your money goes each month. Receive notifications when you’re 
    close to hitting your limits.`,
  },
  {
    icon: OnboardingIcon,
    title: 'Fast Onboarding',
    text: `We don’t do branches. Open your account in minutes online and start taking control 
    of your finances right away.`,
  },
  {
    icon: ApiIcon,
    title: 'Open API',
    text: `Manage your savings, investments, pension, and much more from one account. Tracking 
    your money has never been easier.`,
  },
];

export const articles = [
  {
    author: 'Claire Robinson',
    title: 'Receive money in any currency with no fees',
    text: `The world is getting smaller and we’re becoming more mobile. So why should you be 
    forced to only receive money in a single …`,
    image: 'image-currency.jpg',
  },
  {
    author: 'Wilson Hutton',
    title: 'Treat yourself without worrying about money',
    text: `Our simple budgeting feature allows you to separate out your spending and set 
    realistic limits each month. That means you …`,
    image: 'image-restaurant.jpg',
  },
  {
    author: 'Wilson Hutton',
    title: 'Take your Easybank card wherever you go',
    text: `We want you to enjoy your travels. This is why we don’t charge any fees on purchases 
    while you’re abroad. We’ll even show you …`,
    image: 'image-plane.jpg',
  },
  {
    author: 'Claire Robinson',
    title: 'Our invite-only Beta accounts are now live!',
    text: `After a lot of hard work by the whole team, we’re excited to launch our closed beta. 
    It’s easy to request an invite through the site ...`,
    image: 'image-confetti.jpg',
  },
];

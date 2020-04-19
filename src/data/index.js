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

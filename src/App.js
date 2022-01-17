import { lazy, Suspense, useEffect } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from 'react-router-dom';
import Loading from './components/shared/Loading/Loading';
import ScrollToTop from './ScrollToTop';
import './App.scss';
import Aos from 'aos';
import "aos/dist/aos.css";


import {IntlProvider} from 'react-intl';
import {translate} from './translation/translate';
import {useSelector} from 'react-redux';

const Home = lazy(() => import('./pages/Home/Home'));
const Login = lazy(() => import('./pages/Login/Login'));
const Signup = lazy(() => import('./pages/Signup/Signup'));
const PaymentLinks = lazy(() => import('./pages/PaymentLinks/PaymentLinks'));
const Payments = lazy(() => import('./pages/Payments/Payments'));
const Business = lazy(() => import('./pages/Business/Business'));
const Postpaid = lazy(() => import('./pages/Postpaid/Postpaid'));
const SendMoney = lazy(() => import('./pages/SendMoney/SendMoney'));
const Payouts = lazy(() => import('./pages/Payouts/Payouts'));
const Support = lazy(() => import('./pages/Support/Support'));
const AppsDesktop = lazy(() => import('./pages/AppsDesktop/AppsDesktop'));
const AppsIphone = lazy(() => import('./pages/AppsIphone/AppsIphone'));
const AppsMac = lazy(() => import('./pages/AppsMac/AppsMac'));
const PaymentGateway = lazy(() => import('./pages/PaymentGateway/PaymentGateway'));
const Ecommerce = lazy(() => import('./pages/Ecommerce/Ecommerce'));
const Education = lazy(() => import('./pages/Education/Education'));
const OnlineBooking = lazy(() => import('./pages/OnlineBooking/OnlineBooking'));
const Billing = lazy(() => import('./pages/Billing/Billing'));
const Subscriptions = lazy(() => import('./pages/Subscriptions/Subscriptions'));
const Blog = lazy(() => import('./pages/Blog/Blog'));
const Shop = lazy(() => import('./pages/Shop/Shop'));
const Pricing = lazy(() => import('./pages/Pricing/Pricing'));
const WomenFashion = lazy(() => import('./pages/WomenFashion/WomenFashion'));
const Dresses = lazy(() => import('./pages/Dresses/Dresses'));
const DressesHM = lazy(() => import('./pages/DressesHM/DressesHM'));
const Marketplaces = lazy(() => import('./pages/Marketplaces/Marketplaces'));
const SaaS = lazy(() => import('./pages/SaaS/SaaS'));
const Payroll = lazy(() => import('./pages/Payroll/Payroll'));
const Terminal = lazy(() => import('./pages/Terminal/Terminal'));
const Invoicing = lazy(() => import('./pages/Invoicing/Invoicing'));
const Insurance = lazy(() => import('./pages/Insurance/Insurance'));
const InStorePayments = lazy(() => import('./pages/InStorePayments/InStorePayments'));
const Account = lazy(() => import('./pages/Account/Account'));
const Benefits = lazy(() => import('./pages/Benefits/Benefits'));
const Settlements = lazy(() => import('./pages/Settlements/Settlements'));
const About = lazy(() => import('./pages/About/About'));
const Events = lazy(() => import('./pages/Events/Events'));


function App() {

  useEffect(() => {
    Aos.init({duration:1350})
  }, [])

  const language = useSelector((state) => state.language.language);

  return (
    <Router>
    <Suspense fallback={<Loading />}>
        <IntlProvider
          locale={language}
          formats={{ number: 'en' }}
          messages={translate[language]}
        >
          <ScrollToTop />
            <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/Login' component={Login} />
            <Route path='/Signup' component={Signup} />
            <Route path='/PaymentLinks' component={PaymentLinks} />
            <Route path='/Payments' component={Payments} />
            <Route path='/Business' component={Business} />
            <Route path='/Postpaid' component={Postpaid} />
            <Route path='/SendMoney' component={SendMoney} />
            <Route path='/Payouts' component={Payouts} />
            <Route path='/Support' component={Support} />
            <Route path='/AppsDesktop' component={AppsDesktop} />
            <Route path='/AppsIphone' component={AppsIphone} />
            <Route path='/AppsMac' component={AppsMac} />
            <Route path='/PaymentGateway' component={PaymentGateway} />
            <Route path='/Ecommerce' component={Ecommerce} />
            <Route path='/Education' component={Education} />
            <Route path='/OnlineBooking' component={OnlineBooking} />
            <Route path='/Billing' component={Billing} />
            <Route path='/Subscriptions' component={Subscriptions} />
            <Route path='/Blog' component={Blog} />
            <Route path='/Shop' component={Shop} />
            <Route path='/Pricing' component={Pricing} />
            <Route path='/WomenFashion' component={WomenFashion} />
            <Route path='/Dresses' component={Dresses} />
            <Route path='/DressesHM' component={DressesHM} />
            <Route path='/Marketplaces' component={Marketplaces} />
            <Route path='/SaaS' component={SaaS} />
            <Route path='/Payroll' component={Payroll} />
            <Route path='/Settlements' component={Settlements} />
            <Route path='/Terminal' component={Terminal} />
            <Route path='/Insurance' component={Insurance} />
            <Route path='/Account' component={Account} />
            <Route path='/InStorePayments' component={InStorePayments} />
            <Route path='/Invoicing' component={Invoicing} />
            <Route path='/Benefits' component={Benefits} />
            <Route path='/About' component={About} />
            <Route path='/Events' component={Events} />

            <Redirect to='/' />
          </Switch>
      </IntlProvider>
    </Suspense>
  </Router>
  );
}

export default App;


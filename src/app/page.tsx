import ECommerce from '@/components/Dashboard/E-commerce';
import DefaultLayout from '@/components/Layouts/DefaultLayout';
import TelegramLogin from '@/components/Telegram/TelegramLogin';

export default function Home() {
  return (
    <>
      <DefaultLayout>
        <TelegramLogin />
        <ECommerce />
      </DefaultLayout>
    </>
  );
}

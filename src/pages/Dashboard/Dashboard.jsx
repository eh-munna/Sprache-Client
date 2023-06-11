import useTitleChange from '../../TitleChange/TitleChange';
import Analytics from './Analytics/Analytics';

const Dashboard = () => {
  useTitleChange('Sprache | Dashboard');
  return (
    <div>
      <Analytics />
    </div>
  );
};

export default Dashboard;

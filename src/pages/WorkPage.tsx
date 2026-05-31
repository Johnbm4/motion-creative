import { memo } from 'react';
import PortfolioList from '../components/portfolio/PortfolioList';
import WorldPage from './WorldPage';

function WorkPage() {
  return (
    <WorldPage label="Work" title="Work that holds." description="">
      <PortfolioList />
    </WorldPage>
  );
}

export default memo(WorkPage);

import { Grid } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

import { MetaPanel } from './components/MetaPanel';
import { SidePanel } from 'components/SidePanel/SidePanel';
import { ColorPanel } from 'components/ColorPanel/ColorPanel';
import { Messages } from 'components/Messages/Messages';

function App() {
  return (
    <Grid columns="equal" className="app">
      <ColorPanel />
      <SidePanel />
      <Grid.Column style={{ marginLeft: 320 }}>
        <Messages />
      </Grid.Column>
      <Grid.Column width={4}>
        <MetaPanel />
      </Grid.Column>
    </Grid>
  );
}

export default App;

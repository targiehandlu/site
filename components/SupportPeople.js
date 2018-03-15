


import { withStyles } from 'material-ui/styles';
import IconButton from 'material-ui/IconButton';
import PlayArrowIcon from 'material-ui-icons/PlayArrow';
import Button from 'material-ui/Button';


import Card from './MyCardSlim'

const styles = theme => ({
  icon: {
    height: 38,
    width: 38,
  },
});


const Buttons = withStyles(styles)((props) => <IconButton aria-label="Contact">
  <PlayArrowIcon className={props.classes.icon} />
</IconButton>)

export default () => (<div>
  <Card primary={true} title="Dzień dobry!" text="Tutaj Bartek Meller. Być może jestem w stanie coś doradzić?" image="/static/support.jpg" link={<Button variant="raised" color="primary">Chat</Button>} />
</div>)

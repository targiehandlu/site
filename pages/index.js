import dynamic from 'next/dynamic';
import { connect } from 'react-redux';

import Layout from '../layouts/main';

import { MyHead as Head, MyLink as Link } from '../next';

import {
Wrapper,
ColumnList,
// Gallery,
FsVideo,
} from '../components';


import {
VideoWithEventInfo,
VideoWithReviews,
Visitor,
FeaturedExhibitors,
AllExhibitorsColumnList,
RoleButtons,
SalesMap,
Presenters,
Schedule,
AllExhibitorsAvatarlist
} from '../compositions';



import { Exhibitors } from '../datasources'

const Bookingmap = dynamic(import('../components/Bookingmap/Bookingmap'));


class PageIndex extends React.Component {

static async getInitialProps({
query,
isServer,
store
}) {
return {
preload : ["exhibitors"],
//    load : ["bookingmap", "formdata", "ticketgroups"]
}
}

render() {

return (

<Layout>

<Head />

<VideoWithEventInfo />

{/* <Schedule /> */}

<Visitor
label="visitors.register"
secondaryLabel="event.parties"
/>

<RoleButtons />

<Presenters filter={ function(item){ return item.bio.length > 20} } limit={8} mobile={4}  />

<SalesMap

label="exhibitors.map.title2"
secondaryLabel="exhibitors.map.opensales"
// disabled={true}

/>

<FeaturedExhibitors

label="exhibitors.list_featured"
secondaryTitle=""
links={[
<Link
key="all"
href="/exhibitors"
label="common.menu.visitors.exhibitors"
variant="flat"
color="secondary"
/>
]}

/>


{/*





<Presenters />


<Visitor
label="visitors.register_alt"
secondaryLabel="event.parties"
/> 







*/}


<VideoWithReviews />






<Visitor
label="visitors.register"
secondaryLabel="event.parties"
/>


<AllExhibitorsColumnList />



<FsVideo
background="https://res.cloudinary.com/eventjuicer/image/upload/v1534553598/poster_stage1.jpg"
videoSrc="https://res.cloudinary.com/eventjuicer/video/upload/v1534553583/video_stage1.mp4"

/>


</Layout>
);
}
}

export default connect(null, null)(PageIndex);

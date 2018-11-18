import {
    Wrapper,
    People,
} from '../components';

import {
    Presenters as Datasource
} from '../datasources';

const Presenters = ({label, secondaryLabel, limit, random, filter, link}) => (

    <Wrapper label={label} secondaryLabel={secondaryLabel}>

    <Datasource  
        limit={limit}
        random={random}
        filter={filter}  
    >{
        (data) => 
        <People 
            data={data}
            link={link} 
        />

    }</Datasource>
    
    </Wrapper> 


)

Presenters.defaultProps = {
    label : "presenters.list_featured",
    secondaryLabel : "presenters.list_description",
    links : [],
    limit : 20,
    random : false,
    filter : function(item){ return [77504, 77505, 77508, 77529, 77557, 77773, 78014, 78429].indexOf(item.id) > -1 },
    link : true
}


/*
 
<Link key="all" href="/presenters" label="common.menu.visitors.presenters" variant="flat" color="secondary" />,
<Link key="subjects" href="/schedule" label="common.menu.visitors.schedule" variant="flat" color="secondary" />

*/

export default Presenters
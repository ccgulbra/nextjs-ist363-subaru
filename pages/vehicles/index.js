import CTA from '../../components/CTA';
import Container from '../../components/Container';
import Heading from '../../components/Heading';
import FilterBar from '../../components/FilterBar';
import Grid from '../../components/Grid';
import Layout from '../../components/Layout';
import { useState } from 'react';

import { getAllVehicles, getVehicleTypes } from '../../lib/api';

export async function getStaticProps() {
    const vehicles = await getAllVehicles();
    const vehicleTypes = await getVehicleTypes();

    vehicleTypes.unshift({
        "node": {
            "name": "All",
            "slug": "all"
            }
        },);
    return {
        props: {
            vehicles,
            vehicleTypes
        }
    }
}

const VehiclesPage = ({ vehicles, vehicleTypes }) => {
    // add "all" to vehicleTypes

    const [activeVehicleType, setActiveVehicleType] = useState('all');

    // filter vehicles by activeVehicleType
    const filteredVehicles = activeVehicleType === 'all' ? 
    vehicles 
    : 
    vehicles.filter((vehicle) => {
        const { vehicleTypes } = vehicle.node; 
        const vehicleTypeSlugs = vehicleTypes.edges.map((vehicleType) => {
            return vehicleType.node.slug;
        });
        return vehicleTypeSlugs.includes(activeVehicleType);
    });

    return <Layout>
        <Heading 
            level={1} 
            color="black"
            textAlign="center"
            marginBottom={2}
            paddingBottom={2} 
        >
            Vehicles
        </Heading>
        <Container>
            <FilterBar 
                items={vehicleTypes} 
                activeItem={activeVehicleType}
                setActiveItem={setActiveVehicleType}
            />
            <Grid 
                items={filteredVehicles}
            />
        </Container>
        <CTA />
    </Layout>
}
export default VehiclesPage; 
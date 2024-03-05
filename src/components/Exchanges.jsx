import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { server } from '../index'
import { Button, Container, HStack, Radio, RadioGroup, } from '@chakra-ui/react';
import Loader from './Loader';
import ErrorComponent from './ErrorComponent';
import ExchangeCard from './ExchangeCard';

const Exchanges = () => {

    const [exchanges, setExchanges] = useState([]);
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)


    useEffect(() => {
        const fetchExchanges = async () => {
            try {
                const { data } = await axios.get(`${server}/exchanges`);
                console.log("ExchangesData-->", data);
                setExchanges(data)
                setLoading(false)
            }
            catch (error) {
                setLoading(false)
                setError(true)
            }
        }
        fetchExchanges()
    }, [])

    if (error) return <ErrorComponent message={"Error while fetching Exchanges"} />

    return (
        <Container maxW={"container.xl"}>
            {
                loading ? (
                    <Loader />
                ) : (
                    <>

                        <HStack wrap={"wrap"} justifyContent={"space-evenly"} margin={"6"}>
                            {exchanges.map((item, index) => (
                                <ExchangeCard
                                    key={index}
                                    name={item.name}
                                    img={item.image}
                                    url={item.url}
                                    rank={item.trust_score_rank}
                                />
                            ))}
                        </HStack>

                    </>)
            }
        </Container>
    )
}


export default Exchanges


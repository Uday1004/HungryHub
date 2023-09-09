import React, { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import ProdCard from './ProdCard';
import {categories,options} from "../../Data/Prodinfo";
import {Button , Typography} from "@mui/material"
const MenuView = () => {
    const [category, setCategory] = useState();
    const [allcategories, setAllcategories] = useState(categories);

    useEffect(() => {
        if (category === "") {
            setAllcategories(categories);
        }

        if (category === "chicken") {
            const filteredcategories = categories.filter(
                (item) => item.category === "chicken"
            );

            setAllcategories(filteredcategories);
        }

        if (category === "Curry") {
            const filteredcategories = categories.filter(
                (item) => item.category === "Curry"
            );

            setAllcategories(filteredcategories);
        }

        if (category === "Rice") {
            const filteredcategories = categories.filter(
                (item) => item.category === "Rice"
            );

            setAllcategories(filteredcategories);
        }
        if (category === "seafood") {
            const filteredcategories = categories.filter(
                (item) => item.category === "seafood"
            );

            setAllcategories(filteredcategories);
        }
        if (category === "fruits") {
            const filteredcategories = categories.filter(
                (item) => item.category === "fruits"
            );

            setAllcategories(filteredcategories);
        }
        if (category === "dessert") {
            const filteredcategories = categories.filter(
                (item) => item.category === "dessert"
            );

            setAllcategories(filteredcategories);
        }
        if (category === "drink") {
            const filteredcategories = categories.filter(
                (item) => item.category === "drink"
            );

            setAllcategories(filteredcategories);
        }

    }, [category]);

    return (
        <>
            <section id="menuviews">
                <Container>
                    <Row lg={12}>
                        <Col lg="12" className="text-center">
                            <h2>Popular Foods</h2>
                        </Col>

                        <Col lg="12">
                            <div className="food__category d-flex align-items-center justify-content-center gap-2 flex-wrap">
                                {options.map((cat) => (
                                    <Button
                                    variant='contained'
                                     size='small'
                                     sx={{
                                        "&:hover":{
                                            backgroundColor:'skyblue',
                                            color:'black',
                                            fontWeight:'bold'
                                        }
                                     }}
                                     
                                        
                                        key={cat.id}
                                        className={`d-flex align-items-center btn-menu  ${category === cat.id ? "foodBtnActive" : ""
                                            } `}
                                        onClick={() => setCategory(cat.category)}
                                    >
                                        <Typography> {cat.name} </Typography>
                                    </Button>
                                ))}
                            </div>
                        </Col>
                    </Row>
                    <Row className='justify-content-center'>
                        {allcategories.map((prod) => (
                            <ProdCard key={prod.id} item={prod} />
                        ))}
                    </Row>
                </Container>
            </section>

        </>
    )
}

export default MenuView













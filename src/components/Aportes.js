import React, { Component } from 'react'
import NewUrl from './NewUrl'
import {
   Box, Heading, Text, Stack, Icon
  } from "@chakra-ui/core";


class Aportes extends Component{
    state = {
        data:[
            {ramo:"Algebra", titulo:"PrimerAporte", descripcion:"Descripcion de mi aporte",
             url:"https://www.uach.cl", nickname:"Tallo", likes:0}
        ]
    }

    handleAporte = (data) => {
      const update = this.state.data.push(data);
      this.setState({update})
    }
    render(){
        return(
            <div className="col col-md-10">
                <h1 className="d-inline-block col col-md-9">{this.props.ramo}</h1>
                {
                  (this.props.ramo === undefined)?<h1>Seleccione un ramo</h1>:
                    <NewUrl ramo={this.props.ramo} onAporte={this.handleAporte}/>
                }
                
                {this.state.data.filter((obj)=>{return obj.ramo === this.props.ramo}).map(
                    (aporte)=>{
                        return(
                          <div className="accordion m-3" id="accordionExample">
                            <div className="card">
                              <div className="card-header" id="headingOne">
                                <h6>{ aporte.likes }</h6>
                                <h3 
                                  className="text-primary" data-toggle="collapse" 
                                  data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    { aporte.titulo }
                                </h3>
                                <p className="text-primary ">{ aporte.nickname }</p>

                              </div>
        
                              <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                                <div className="card-body">
                                    <h6>{ aporte.descripcion }</h6>
                                    <a target="_blank"href={ aporte.url } className="text-warning">
                                      Click Aquí para ir al enlace
                                    </a>
                                </div>
                              </div>
                            </div>
                          </div>

                        )
                    }
                )}
            </div>
        )
    }
}

function Feature({ title, desc, ...rest}) {
  return (
    <Box p={2} m={3} bg="tomato" shadow="md" borderWidth="1px" {...rest}>
      <Heading fontSize="xl">{title}</Heading>
      <Text mt={4}>{desc}</Text>
    </Box>
  );
}

function StackEx({titulo, descripcion}) {
  return (
    <Stack spacing={8}>
      <Feature
        title={titulo}
        desc={descripcion}
      />
    </Stack>
  );
}

export default Aportes;
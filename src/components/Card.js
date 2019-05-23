import React from 'react'
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap'

export default function DrinkCard () {
  return (
    <div>
	  <Card className='Cards'>
        <CardImg top width="100%" src={require("../img/resize.jpg")} alt="Card image cap" />
        <CardBody>
          <CardTitle>Daiquiri</CardTitle>
          <CardSubtitle>Liquor: Rum</CardSubtitle>
          <CardText> (/ˈdaɪkəri, ˈdæk-/; Spanish: daiquirí [daikiˈɾi]) is a family of cocktails whose main ingredients are rum, citrus juice (typically lime juice), and sugar or other sweetener.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
    </div>
  )
}
import React, { FunctionComponent, CSSProperties } from 'react'
import styles from './styles.module.scss';
import Card, { CardHeader, CardContent, CardFooter } from '../../../common/components/Card';
import Avatar from '../../../common/components/Avatar';
import IconButton, { IconButtonKind } from '../../../common/components/IconButton';
import photo1 from './photo1.jpg';
import photo2 from './photo2.jpg';
import photo3 from './photo3.jpg';
import photo4 from './photo4.jpg';

type Props = {

}

const CardSample: FunctionComponent<Props> = () => {
  const cardStyle: CSSProperties = { maxWidth: '320px', display: 'flex', flexDirection: 'column' };
  const cardFooterStyle: CSSProperties = { display: 'flex', justifyContent: 'flex-end' };

  const header = <CardHeader avatar={<Avatar />} primaryText="This is a very long text i think" subText="Some supporting text" />;

  const footer = <CardFooter style={cardFooterStyle}>
    <IconButton type={IconButtonKind.Light} name='favorite' />
    <IconButton type={IconButtonKind.Light} name='share' />
    <IconButton type={IconButtonKind.Light} name='more_vert' />
  </CardFooter>;

  return (
    <>
      <h2>Card</h2>
      <div className={styles.content}>
        <Card style={cardStyle}>
          {header}
          <CardContent>
            <img className={styles.image} src={photo1} />
          </CardContent>
          {footer}
        </Card>

        <Card style={cardStyle}>
          {header}
          <CardContent>
            <img className={styles.image} src={photo2} />
          </CardContent>
          {footer}
        </Card>

        <Card style={cardStyle}>
          {header}
          <CardContent>
            <img className={styles.image} src={photo3} />
          </CardContent>
          {footer}
        </Card>

        <Card style={cardStyle}>
          {header}
          <CardContent>
            <img className={styles.image} src={photo4} />
          </CardContent>
          {footer}
        </Card>
      </div>
    </>
  )
}

export default CardSample;
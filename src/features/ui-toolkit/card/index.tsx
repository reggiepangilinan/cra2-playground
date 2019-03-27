import React, { FunctionComponent } from 'react'
import styles from './styles.module.scss';
import Card from '../../../common/components/Card';
import Avatar from '../../../common/components/Avatar';
import IconButton, { IconButtonKind } from '../../../common/components/IconButton';

type Props = {

}

const CardSample: FunctionComponent<Props> = () => {
  return (
    <>
      <h2>Card</h2>
      <div className={styles.content}>
        <Card style={{ maxWidth: '320px' }}>

          <div className={styles.cardHeader}>
            <div className={styles.avatarWrapper}>
              <Avatar />
            </div>
            <div className={styles.textWrapper}>
              <div className={styles.primaryText}>This is a very long text i think</div>
              <small className={styles.subText}>Some supporting text</small>
            </div>
          </div>



          <div className={styles.cardContent}>
            <img src="https://mgt7e4qkxb-flywheel.netdna-ssl.com/wp-content/uploads/2017/08/lamb-1342395_1280.jpg" />
          </div>

          <div className={styles.cardFooter}>
            <IconButton type={IconButtonKind.Light} name='favorite' />
            <IconButton type={IconButtonKind.Light} name='share' />
            <IconButton type={IconButtonKind.Light} name='more_vert' />
          </div>
        </Card>

        <Card style={{ maxWidth: '320px' }}>

          <div className={styles.cardHeader}>
            <div className={styles.avatarWrapper}>
              <Avatar />
            </div>
            <div className={styles.textWrapper}>
              <div className={styles.primaryText}>This is a very long text i think</div>
              <small className={styles.subText}>Some supporting text</small>
            </div>
          </div>



          <div className={styles.cardContent}>
            <img src="https://www.rd.com/wp-content/uploads/2018/08/shutterstock_422378311.jpg" />
          </div>

          <div className={styles.cardFooter}>
            <IconButton type={IconButtonKind.Light} name='favorite' />
            <IconButton type={IconButtonKind.Light} name='share' />
            <IconButton type={IconButtonKind.Light} name='more_vert' />
          </div>
        </Card>

        <Card style={{ maxWidth: '320px' }}>

          <div className={styles.cardHeader}>
            <div className={styles.avatarWrapper}>
              <Avatar />
            </div>
            <div className={styles.textWrapper}>
              <div className={styles.primaryText}>This is a very long text i think</div>
              <small className={styles.subText}>Some supporting text</small>
            </div>
          </div>



          <div className={styles.cardContent}>
            <img src="https://food.fnr.sndimg.com/content/dam/images/food/fullset/2012/2/24/2/VM0401_shrimp-stuffed-chiles_s4x3.jpg.rend.hgtvcom.826.620.suffix/1371606113408.jpeg" />
          </div>

          <div className={styles.cardFooter}>
            <IconButton type={IconButtonKind.Light} name='favorite' />
            <IconButton type={IconButtonKind.Light} name='share' />
            <IconButton type={IconButtonKind.Light} name='more_vert' />
          </div>
        </Card>

        <Card style={{ maxWidth: '320px' }}>

          <div className={styles.cardHeader}>
            <div className={styles.avatarWrapper}>
              <Avatar />
            </div>
            <div className={styles.textWrapper}>
              <div className={styles.primaryText}>This is a very long text i think</div>
              <small className={styles.subText}>Some supporting text</small>
            </div>
          </div>



          <div className={styles.cardContent}>
            <img src="https://www.rd.com/wp-content/uploads/2018/08/melbourne-australia-oct-26-2017-neatly-arranged-bakery-on-the-shelves-in-costco-supermarket.jpg" />
          </div>

          <div className={styles.cardFooter}>
            <IconButton type={IconButtonKind.Light} name='favorite' />
            <IconButton type={IconButtonKind.Light} name='share' />
            <IconButton type={IconButtonKind.Light} name='more_vert' />
          </div>
        </Card>

      </div>




    </>
  )
}

export default CardSample;
import { css, styled } from '@/stitches.config';

import { Button } from '@/src/components/button';
import { Grid } from '@/src/components/grid';
import { Divider } from '@/src/components/divider';
import { Title } from '@/src/components/title';
import { Text } from '@/src/components/text';

import frameBlue from '@/src/assets/activities/frame-blue.svg';
import frameOrange from '@/src/assets/activities/frame-orange.svg';
import tagBlue from '@/src/assets/activities/tag-blue.svg';
import tagOrange from '@/src/assets/activities/tag-orange.svg';

const Container = styled('section', {
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  gap: '2.5rem',
  padding: '3rem 5%',
  backgroundColor: '$dark',
});

const Activity = styled('article', {
  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem',
});

const ActivityImage = styled('span', {
  display: 'flex',
  width: 'auto',
  height: 350,
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  '& > img': {
    display: 'block',
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    objectPosition: 'center',
  },
  variants: {
    frame: {
      activity: { backgroundImage: `url("${frameBlue}")` },
      competition: { backgroundImage: `url("${frameOrange}")` },
    },
  },
});

const ActivityBody = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',
  padding: '0',
  '@tablet': { padding: '0 1rem' },
  '@mobile': { padding: '0 1rem' },
});

const ActivityTag = styled('div', {
  display: 'flex',
  gap: '0.5rem',
  variants: {
    tag: {
      activity: { color: '$tertiary' },
      competition: { color: '$secondary' },
    },
  },
});

const activities = [
  { id: 1, label: 'Activity One', type: 'activity', price: 45000 },
  { id: 2, label: 'Competition Two', type: 'competition', price: 45000 },
  { id: 3, label: 'Activity Two', type: 'activity', price: 45000 },
];

export default function Activities() {
  return (
    <Container>
      <header
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1rem',
        }}>
        <Title>Activities</Title>
        <Divider css={{ marginBottom: '1rem' }} />
        <div
          className={css({
            display: 'flex',
            justifyContent: 'center',
            gap: '1rem',
            width: '100%',
            '@mobile': { flexDirection: 'column' },
          }).toString()}>
          <Button color="light" fullWidth>
            Alls
          </Button>
          <Button color="light" fullWidth>
            Activities
          </Button>
          <Button color="light" fullWidth>
            Competitions
          </Button>
        </div>
      </header>
      <Grid
        cols={3}
        css={{ color: '$white', borderTop: '1.5px solid $primary', padding: '2rem 0' }}>
        {activities.map((activity) => {
          const isActivity = activity.type === 'activity';

          return (
            <Activity key={activity.id}>
              <ActivityImage frame={activity.type}></ActivityImage>
              <ActivityBody>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}>
                  <Text>{activity.label}</Text>
                  <ActivityTag tag="activity">
                    <img src={isActivity ? tagBlue : tagOrange} alt="Tag" width={12.5} />
                    <Text
                      css={{
                        fontSize: '1rem',
                        color: isActivity ? '$tertiary' : '$secondary',
                      }}>
                      {activity.type}
                    </Text>
                  </ActivityTag>
                </div>
                <Text css={{ color: 'rgba(255, 255, 255, .5)' }}>Rp {activity.price}</Text>
              </ActivityBody>
            </Activity>
          );
        })}
      </Grid>
    </Container>
  );
}

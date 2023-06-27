import { createStyles, Title, Text, Button, Container, rem } from '@mantine/core';
import { Dots } from './Dots';

const useStyles = createStyles((theme) => ({
  wrapper: {
    position: 'relative',
    paddingTop: rem(120),
    paddingBottom: rem(80),

    [theme.fn.smallerThan('sm')]: {
      paddingTop: rem(80),
      paddingBottom: rem(60),
    },
  },

  inner: {
    position: 'relative',
    zIndex: 1,
  },

  dots: {
    position: 'absolute',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1],

    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  dotsLeft: {
    left: 0,
    top: 0,
  },

  title: {
    textAlign: 'center',
    fontWeight: 800,
    fontSize: rem(40),
    letterSpacing: -1,
    color: theme. colorScheme === 'dark' ? theme.white : theme.black,
    // color: '#C18D3E',
    marginBottom: theme.spacing.xs,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,

    [theme.fn.smallerThan('xs')]: {
      fontSize: rem(28),
      textAlign: 'left',
    },
  },

  highlight: {
    // color: theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 4 : 6],
    color: '#B05E27', 
  },

  description: {
    textAlign: 'center',

    [theme.fn.smallerThan('xs')]: {
      textAlign: 'left',
      fontSize: theme.fontSizes.md,
    },
  },

  tryButton: {
    backgroundColor: '#B05E27',
    color: theme.white,
    
    '&:hover': {
        backgroundColor: '#C38154',
        // Add any desired hover styles
      },
  
  }, 

  controls: {
    marginTop: theme.spacing.lg,
    display: 'flex',
    justifyContent: 'center',

    [theme.fn.smallerThan('xs')]: {
      flexDirection: 'column',
    },
  },

  control: {
    '&:not(:first-of-type)': {
      marginLeft: theme.spacing.md,
    },
    // backgroundColor: '#A36E39',
    // color: theme.white,

    [theme.fn.smallerThan('xs')]: {
      height: rem(42),
      fontSize: theme.fontSizes.md,

      '&:not(:first-of-type)': {
        marginTop: theme.spacing.md,
        marginLeft: 0,
      },
    },
  },
}));

export function HeroText() {
  const { classes } = useStyles();

  return (
    <Container className={classes.wrapper} size={1400}>
      <Dots className={classes.dots} style={{ left: 0, top: 0 }} />
      <Dots className={classes.dots} style={{ left: 60, top: 0 }} />
      <Dots className={classes.dots} style={{ left: 0, top: 140 }} />
      <Dots className={classes.dots} style={{ right: 0, top: 60 }} />

      <div className={classes.inner}>
        <Title className={classes.title}>
          Friends as {' '}
          <Text component="span" className={classes.highlight} inherit>
            coffee ;) 
          </Text>{' '}
          {/* for any stack */}
        </Title>

        <Container p={0} size={600}>
          <Text size="lg" color="dimmed" className={classes.description}>
            Have you ever noticed trendy coffee shops have entire personalities 
            and origin stories for their drinks? What if your friends were coffee drinks? 
            What would they be? Are they a bestseller, a featured creation, a seasonal special, 
            or maybe they're the dregs at the bottom of the pot...
          </Text>
        </Container>

        <div className={classes.controls}>
          <Button className={classes.control} size="lg" variant="default">
            Demo
          </Button>
          <Button className={`${classes.control} ${classes.tryButton}`} size="lg">
            Try it yourself
          </Button>
        </div>
      </div>
    </Container>
  );
}
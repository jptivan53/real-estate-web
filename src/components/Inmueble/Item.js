import { Avatar, Card, CardContent, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Image from "next/image";
import NextLink from "next/link";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: "100%",
    boxShadow: theme.shadows[2],
    transition: "box-shadow 0.3s ease",
    cursor: "pointer",
    "&:hover": {
      boxShadow: theme.shadows[6],
    },
  },
  title: {
    fontWeight: "bold",
  },
  location: {
    fontWeight: "bold",
  },
  link: {
    textDecoration: "none",
  },
  imgContainer: {
    backgroundColor: "#e2e2e2",
    paddingTop: "56.25%",
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    position: "relative",
    overflow: "hidden",
    height: 0,
  },
  img: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
  },
  estado: {
    position: "absolute",
    padding: theme.spacing(0.5, 1),
    fontWeight: 600,
    borderRadius: 4,
    top: 20,
    right: 20,
    color: (props) =>
      props.estado === "Venta"
        ? theme.palette.getContrastText(theme.palette.primary.A700)
        : theme.palette.getContrastText(theme.palette.secondary.main),
    backgroundColor: (props) =>
      props.estado === "Venta"
        ? theme.palette.primary.A700
        : theme.palette.secondary.main,
  },
  footer: {
    padding: theme.spacing(0, 2, 2, 2),
    display: "flex",
    alignItems: "center",
  },
  avatar: {
    display: "inline-block",
    marginRight: theme.spacing(1),
    width: theme.spacing(4),
    height: theme.spacing(4),
  },
}));

export function InmuebleItem({
  slug,
  titulo,
  precio,
  ubiAprox,
  habitaciones,
  estado,
  area,
  mainImg,
  fecha,
  agent,
}) {
  const classes = useStyles({ estado });
  return (
    <NextLink href="/inmueble/[slug]" as={`/inmueble/${slug}`} passHref>
      <a className={classes.link}>
        <Card className={classes.root} component="article">
          <div className={classes.imgContainer}>
            <Image
              src={mainImg.url}
              alt={mainImg.alt}
              className={classes.img}
              layout="fill"
            />
            <div className={classes.estado}>{estado}</div>
          </div>
          <CardContent>
            <Typography variant="h6" className={classes.title}>
              {titulo.text}
            </Typography>
            <Typography
              variant="body2"
              className={classes.location}
              color="textSecondary"
              gutterBottom
            >
              {ubiAprox}
            </Typography>
            <Typography variant="h5" gutterBottom>
              ${precio}
            </Typography>
            <Typography variant="body2" gutterBottom>
              {area} m<sup>2</sup> | {habitaciones} habitaciones
            </Typography>
          </CardContent>
        </Card>
      </a>
    </NextLink>
  );
}

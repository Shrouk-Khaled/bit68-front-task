import classes from "./CategoryCard.module.scss"

const CategoryCard = ({category}) => {
    return(
        <div className={classes.item}>
        <img
          src={category.image}
          alt="category pic"
          className={classes.pic}
        />
        <p className={classes.text}>{category.name}</p>
      </div>
    )
 }

 export default CategoryCard
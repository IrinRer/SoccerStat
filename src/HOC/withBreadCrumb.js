const withBreadCrumb = (BaseComponent, nameData) => {
   return (props) => {
       return <BaseComponent nameData={nameData}/>
   }
}

export default withBreadCrumb;
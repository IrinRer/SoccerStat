const withCardComponent = (BaseComponent) => {
  return (props) => {
    const arrPageNumber = [];

    function onRender(arr) {
      return arr.forEach((item) => {
        arrPageNumber.push({
          id: item.id,
          name: item.name,
          country: item.country,
          badge: item.badge,
        });
      });
    }

    onRender(props.fillter);
    return <BaseComponent arrPageNumber={arrPageNumber} />;
  };
};

export default withCardComponent;

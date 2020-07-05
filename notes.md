        {/* Maps image  */}
        {this.state.veggies.map((veggie, i) => {
          return (
            <img
              height={100}
              width={150}
              src={veggie.img}
              alt={veggie.veggie_name}
            ></img>
          );
        })}
        {/* Maps for description */}
        {this.state.veggies.map((veggie, i) => {
          return <li key={i}>{veggie.description}</li>;
        })}
        {/* Maps name and button */}
        {this.state.veggies.map((veggie, i) => {
          return (
            <li key={i}>
              {veggie.veggie_name}
              <button
                onClick={(id) => {
                  this.props.dispatch({
                    type: "DELETE_ITEM",
                    payload: veggie.ID,
                  });
                }}
              >
                Delete
              </button>
            </li>
          );
        })}

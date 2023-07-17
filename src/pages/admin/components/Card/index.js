import "./Card.scss";

const Card = (props) => {
  return (
    <div className="card">
      <div className="card__header">Header</div>
      <div className="card__body">
        <table>
          <thead>
            <tr>
              <th>STT</th>
              <th>Name</th>
              <th>Title</th>
              <th>Title2</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Ngọc Huyền</td>
              <td>Xinh đẹp</td>
              <td>Dễ thương</td>
              <td>
                <button>Edit</button>
                <button>Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="card__footer">Footer</div>
    </div>
  );
};

export default Card;

function getSession() {
  const token = JSON.parse(sessionStorage.getItem("token"));
  const cbid = JSON.parse(sessionStorage.getItem("cbid"));

  return { token: token, id: cbid };
}

export async function getUser() {
  const session = getSession();
  const responseOption = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${session.token}`,
    },
  };
  const response = await fetch(
    `http://localhost:8000/600/users/${session.id}`,
    responseOption
  );

  const data = await response.json();
  return data;
}

export async function getUserOrders() {
  const session = getSession();
  const response = await fetch(
    `http://localhost:8000/660/orders?user.id=${session.id}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${session.token}`,
      },
    }
  );
  const data = await response.json();
  return data;
}

export async function CreateOrder(cartList, total, user) {
  const session = getSession();
  const order = {
    cartList: cartList,
    amount_paid: total,
    quantity: cartList.length,
    user: {
      name: user.name,
      email: user.email,
      id: user.id,
    },
  };

  const response = await fetch("http://localhost:8000/660/orders", {
    method: "POSt",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${session.token}`,
    },
    body: JSON.stringify(order),
  });

  const data = await response.json();

  return data;
}

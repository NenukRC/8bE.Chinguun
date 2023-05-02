const products = [
    {
      name: "Skittles",
      price: 3500,
      type: "gummy",
      image:
      "https://cdn.shopify.com/s/files/1/0636/2519/9866/products/127267-01_skittles-candy-packs-original-36-piece-box_600x.jpg?v=1674627479",
    },
    {
      name: "Snickers",
      price: 3000,
      image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4fKnZACqrfVq6qjkpreLf5ZMqN78ElbgFeA&usqp=CAU",
    },
    {
      name: "Twix",
      price: 3000,
      image:
      "https://pbs.twimg.com/profile_images/1219344620405981185/2juY3NZ3_400x400.jpg"  ,
  
    },
    {
      name: "KitKat",
      price: 2000,
      image:
      "https://cdn.huntoffice.co.uk/images/D/NL59368-X.jpg",
    },
    {
      name: "Bounty",
      price: 4000,
      image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUUFRgXEhUYFhUYGBgdGBkYGBoaGRoaGRwcHhgdGhkcITAnHh4rHxgZJjgmLS8xNTU4HCQ7QDs0QC40NjEBDAwMEA8QHxISHzQrJCs1ND82NDQ2NDo/NTQ2NjQ0MT80NjY0NjQxODc2MTo0Njc0NDY2NDc/Nj0/NDQ0Oj80NP/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABwIDBAUGCAH/xABDEAACAQIEAwYDBAcGBQUAAAABAgADEQQSITEFQWEGEyJRcYEHMpFCUmKhFCNykrHB8DNDgtHh8VNUorLSFhclNET/xAAZAQEAAwEBAAAAAAAAAAAAAAAAAQIDBAX/xAAqEQEBAAIBAwMDAgcAAAAAAAAAAQIDEQQhMRITQVFhcQXBFCIjMoGRsf/aAAwDAQACEQMRAD8AmaIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICJ8n2AiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICQzxf4p4uhia1NUw7pTqui+GoDZGK6ksNdNdN7201kzTy52pq3xuJINw2Iq63LbOwHibUxBK3BfivSqKP0inkf7QQsRztluttfIt/rIHDeIUsQgqUXDqeY3B5gjkek8qUXsT6f7TecG4/iKFzh6rI1gCBY3tt8wPtJ4HpuJ55btzxAi/6U/0QEHyNlmw4HxrimMfJTxLgKLu7EKiLzZiLfSVysxnNJOfCdRPsiqp2jal4aVarXI+arVdrMeeRFIAXqbmWj2rrMtTO7KEps+dHcFTsgsWKksxAAI85hOpxt4kd+X6bux1e7lxJ90swZCHA+NcUxRPdV2CJ89R2y00H4mPPpNq+Kx5B7jiCVmW5yAlGa33Cws31mt24y8WuOas8sbljLZPKXInn7/17jh/ftceYE+j4gY//AI5+g/yl1HoCJAZ+I2PP96PZR/KP/cTHf8T8oE+RIDHxFx33xKl+JGO++D7H/OBPMSFuHdsuKV79xTap1VGt+9e1/eXOI9sOK4exxFEoDsWVsvpmDWv7yvqnPHKeEyxIn4T2k4lWTvLUqdHYVKzuik/h8V29hM1uM49v7Gphq5Fzkp1nDm3kr2ze0rduMvFq2OrPKeqS8fVJkwOL8RTDUKlapfJSRmYLbMQovZQSBc7DUSM8V2kxr0AzNWpqWIPcBS6stwVcupK68um4kfdq+2WKxapTqVHyKPEjAJnZSbMyLvsDYk6zRRLvCfijhsTVSnToVw1RlVS3dqLsbC5Dmd/PM/wtu3EsMoJAzM3zAfKjnS+/oNSLz0xAREQEREBERA+TyvxYlsRXbVwa1U3DZwfG1iHAswtzsLjynqgzypjmJq1Te5NSoSTkYkl2uSyjKT1WwPLSTBivTuBLtCllbXUWnxksB52B/wB+suow1O4AH5yUMzh+CavVSmnzVHVdvvHc+m/tO24jXSgn6Jhb90jWdh89epexvbcX0A56crTF4Vgv0OiKj6YvEJdRzoUDz6O21+Qva2t8nsvQVsRRzAFnzOqn7FJfmqHq2y9CTznBvz9eXpniPX6TXjo1+/nO9/tn7sHGYV6TZHPjCqXUbIWGbLfmQCtz53mTheCtXpqKjd3QJ77EVPwLdaKL5k+NrebCYmNqtXqsVPirVPD0ztZb+QFx9JsONcS7wpQw2tJSFQDTvGAtmY/dAGnkBeYY2zvPL1erwz24468rxJOcqo4hxHOBRw693h0BKU15hd3qEbm5G+gJA1J1wsJWKOHJ0pq9RuoRSQPdyg95ssOaa4GsaZzs9ZKZqffK+JsvkgtYedr87zRVwxpVgnzuKKL1NSpqPcJaTMec+7O7sZ0WftzieJ9/Hn7tZwHgtfG1GCkKou1Wq+iINyT+ek6kPgsILUKCVmXeviBcE+appYddPSXOLFcJRTB0iAEUNiGG71CM1j0UWNvTymmZqwqrQwqBsW1izEBhRDC4VQbgNYgs587Dprc8tl4xvEedr0aun1TbunNvifvW2OMw+K8GJo0UuNK1JMjpoSNBfMDba31mn47wrCLRephXrXplM61VXVXbKrKV21vofIzecbrBEp4fP3z0yWrVSb5qh0Kqfurr0vpymEOB4jEYdO67tFeoXdqrZVYp4aSA21v4mt+ISuvO45eezXq+n1+xNvp4yviT/qnhPZ2jQprXx92ZxelhlOUkcmqHkP612G1oYzC1iUxGGw9Ogqll7tMrjLqFVr3Jbblf0vMmulHF4jO7lO5pqcTSscyimOT7BGFrW1NyQZzCZnYKtlZr6/ZQDVmP4VFz9Bzlc8s7l5a9F0/S5acrlL2ne34+0bnFcYq1rrTApUUHyqwp0qa8s7EgE28/YTHXEMKNQVaithWpuGZaq1ELkEIEsbhw1jsNj0ms4ZQXH1HQu1PBYZGdrC7sBu5HN3IO+w0FpY4n2Vc5XwKVK9F7gXC94jD7L2Nuf9bnSa8ZZ6rxXLt6vLLC468Z6PHj9/q6rtjUK1Qii1NKKCmo+UAi5IHr/ATT4jEUlrPSDNQemVK1ajs6VNA2eyrdGFwwtodtN5su0pymijkGtTw9NattbMLkKeoBv7ich2lqDPRPNsNTJ62Lqp91VZXThMsrK36nbs1dLqywvHa9vqt8f4sa+JqNSdu7ZltfnlRUZ8p+UsVJ89ZzfEGu56AD+vrM5FsCWOUc+s1eIcMxInoSTGSR4XPN5d98FKV+JKdfDRqnS34V1vy8XLXbleeiJBXwGw18TXqfdoBeW7ve99xonLz15SdYCIiAiIgIiIFD7H05W/npPK2Jtnc63zMdct9zvl8N/TTy0nqeoPCeenQ/kdJ5PxFUBm5WZtMoW2p0yjRfQaCTADG1vWdL2E4Wru9euP1GHysw++/2EHUm39Gc5VsALbkA20NgdbG3PpaSFUojC4PD0NADTFeqfvPUva/RVWw/0mO/O449vNdPR6Pe3TG+Pn8MbGYzvXqVsQfCBnqAfd2Wmv7Rso6X8pX2RxLVGxuJf51oFV8lL6Ko6Cyj2mj7TV8gSiQQ2j1QRbxkeBOoRTr1dvKZ/YbFo9PF4csFqVUVqdyBnZDfIL8zYfWYzXxqt+a69/UY7epxnjHGyT8RS7ganQD+v4TF4tjDRQoulaovj86dM6hOjtoW8hYTIr1O5U1aqMoQ+BHGUvU+yLHUovzE87C15oMHgcRimd0RnNyXc7XJ1ueZvfQSNGv5ydH6r1sz/pa7zPmz5dbw0/8AxdO3/Ntf9x7Svg7KHBe2Va2FJv8Atuo/6mX6z5wFGw9CrQxKZ1cq1MAspV12NyASPO3X1mEceiZ+9RlVkZTkDagj1tcGxvfQgSMtd9dvwww6jD+E9q888/4Z/HqbJiq3eg371m1+0pYstj5FbS/W4+5zJhqK0WqXL934qrk75nNrL109Zj1cfUxCIwuoVAiVHFqjJuPESLi/MDzmNVV2HdZUSmb95UVirO3k+UA/W8rjpvzW+fXYXHHnXLlJ2tvb/TIxfDcmHSuHV1ZnWoyMCiMCAq3/AHteZ9hMOpUZ6a945ShTXKHb5Qp3Wkv22PKwPU6WljA8Mx1EMMJVy023UsF/eVgVPLUb9Jh8Q4Fj6hLVP1rKNu8DG3PKB4R6C3pNJ089Xnsyv6ptuv08d+/f8/R1XD8QMRgq74Zf1tSuorICO8FFFC0wLnUWVSfec1xuqaFNkJArVbBlBBKUhrlYjTM7WuPJfrzHeMjEeJGGhGqsOhG4lvvJrNEmXq5cN6rP2vanjnm/d0XY/ji4SsTVXNQqKUqra5ytztztc6dZ0Yp1QznBOalIk5XpVlBK/ZDgspzAaHfaR13kpLA7ge8nZpxzvPydP1eejmY+L8V2+KKUtcS6jmaVNw9ZydbEqSqA82JPO2s5jH49q1Q1HAF7WUfKqroqjoAAJgipPveCW16scPCvUdVs33nOsnH0NWC8jcdVOoPra01Bm9LF0Vxunhb0+yf5ewmqxFI5yFFydQAPPymlc6UvgIf1+Jtt3VO/h55jbxcuenP2k3yCPgarpjaoZWUNh2Oqn7LpzO3ze+kmTifGaVC3eE3JtZbEi+17kWleVpOW0iYeB4hSrAmk6vlJVgCLqw3DDcHoZmSUEREBERAs4n5W/ZPl5fi0+uk8p1KIvoNidRl8/wAOn008p6wIvodpzL9geGn/APKg/ZZ139GkwQBwXAVK7ZKVMu4Ynwrc6gDUjkP5mSJS7O8SKItXA06rU0CU6j1kFlBJVWRXAcKWNs30kn8G4Fh8GhTDUlpqSSbEkknzZiSfrNnK5SXynHK43mIFxnw34nVqGo6KWY3Zmqpc+ex9ZSPhXxC98tMeX6wae8n2JKEC1vh/iqANfGZXp0wNDUL5iSAqkHXLcgkdJeTjNQLlAS1rABQAB5ADQCSh2+/+lV9af/esh0zLO92+qThmU8UGN3vc7neZwemPuueQN/zmkB1n0mU5aelerYGoSSGJF97z6KDoNHYdLy2lUjYkStazXuTf1k8w4rEq1qy7s9ujN/KZGAxhqDKXdXJsrAAr/i00+lpfNYHf6cpaSmQTlUWYWJsLkR2O8YmKZxYV1FRfslwKg008JO3tKaDUgf7NNd7Iov66azNo0gHYXBQqvhPmdCB1Fr36y02HVCQwI10IsVI5dRHKOIwMZwrDObqGQ+S2y3/ZI/IETEHZrN8tVP8AHdf4AibpsLpmuAvmxyjS19Wt5iUd2SDl1t5a/W0mZ2fKt1434Y2B+H2KrqWoGlUA3CVFuPUG1pW3wx4kP7i/+On/AOUzeG8RXDuKjZ867ZGAB3uHvuPQzaYXi2Jr10ZWq5PCfmZVJG4uOV+V4y3zGc1HsW3s5uj2Hx9JwKlMUQ1wWdkKkfauFYkjXp6idhgO7wf6rCMr1ghLuWUak6sx5W2VeV/eaHG8bxldmapUJDE+FcoCjkLBTttrrNY2Lq5yKbXBHiBQAEjW5GoPLeVu6Xtyvjos7uubiNRG8TMj8rp+YIGvrczBxTvWDCpUL2ylQN8xYC5HoT+U59uMYi/6y7DqND5/Jz0E2vD+L0iGIGR8rX31t5aX1BJ6WiZSp9uyrPDOHO7ioi1aTublqTlNSSWtl9zpcSWDxBsJh0D1Hqt4QGexc6WObTfSRpgeK1KbK4dAEe5cqDYCxAC7mwv0t6TY43tZRxD7hEuTbxMtzuQQvTaTjnIrlhb8JP4RxNqw8QG17jpa+nuPrNtOO4XjFFBqiOvdUwxumpYrbMx11ADaLz58p0/D8V3tJKgFs6K1vLMAbfnNcbywynDLiIllSIiAiIgIiIHP9t6ZbBVbC5AU6fhdSfyvIYaega9FXRkYXVgVI6EWM4TjPw+zHNhnUDmr3H0ZQb+4meWNt5jbXlJ2qNwZVabniXZvEUD4qTBR9oDMv7y7e805QiZ1rLKRefZ8IhYvLqVyPSWrQRAv98eku/pWm0xBKkMI4i5jKYrU3UIruU0KhSV10OceIaj5b211mJwvs9WBvUugta5cFuW1jfabzg1BAzMFHiKaW03GYe+unQzOeguYlbkjMzqBmZybg730+uigbTnyuV7ctZxPhrU4Zh6RPhNRlFyT8vn8x9uXMTFrdpghIFAeG2oqDKBbxA2UWIJUaXvrNpiMaq1Up+G7rrc2bM9r3FtdBcW/zms7ScMw9HD1nGlR+6KC5IstQByuutw3ra8jHVMr/N3/ACZZ2Tsr4PiUqu5VSiu1/EbjXcgkCwJm1OEpI4V2FyL88trXBLDRQep1mr4VRcgHKFtbxea5d7EcszaazO4w4q00poMwF85NgSqi4U8zqb8hrKZaZb5Wmdi3i8XhVGpzqGKsaa5wCu+vPf7N9jKhhcMWIp0s5yBg5sEOY6DN0BBP85ruE0FpKSxChQx1FgF1LG/LTe4l5uzveU6j06jhwq9yuZkC5Pnvb5s3i5DYAS004ztzUXZfLYCjTQKuRA7XOW17LaxYjfc2ufSU4nDI6o5TJdM1tA17L4cwJtzOm9xr5XOD4MBVapmNWwBLqQdFsQS45DSw8+sy8TojhQwIRm0FxZSfCBqb6a9LSZhJ4Llar4CpThrqt37zE5B1DZFPp8tpJ+HoBEVF0CgAegFhON+GbrWwQDC+SvUvf7yvmU/wM7id2E4jh2Xvw+xPkS7N9iIgIiICIiAiIgfJrMXwLD1STUooWO7AZWP+JbGbOJHCeeHB8R+HaNc0azKeQcAgnqVtb6GcTxPs/icOxFSk1vvqMyEeYYfwNjJyiVuEq+OzKPPQMqk44/gmHr/21FHP3stm9mGo+s0OK+HuEb5DUpno2Ye4cE/nK3CrzbPlFgE+qJ2mN+HVddaNVHHkwKH8swP5TQ43s9iqOtSg4A+0ozrbzJS9veVss8tJljfFW+HuF+bRQCWN7ZVUgliel/5ToKFMuodLNa+6g5gWIDAcjlsb3Olx1Gs7Mdm2xhdWZkpGmUdwATq2qrfmV9bD1E7zhHY6lh6Ypo7soH2sp53BOm95T27l3hdkxvFRlxqvSFR1qZs2hsFNwCg5nQC+uk1eP4wlVWQUz8mQNzHizbEnn/vJoHY/BZizYdWZjdi5Zsx6gmx9LWmZS7P4RSGTC0FYG4K0UBB8wQuhl5pql3RC/wCh8USprg6uVSMuVGZctgLAi+h3PWZVJcYlr4GtlHPu6trC24yXtr/GTlFpe6opN1iDqPFqisCcM+YWvcH33SZ1bjaE3qUXDWsuozLswFz1v5X9pMcpKg7iV9mLe/foimrxuk9gSwXMD411GljbIDe/Xrylqtj0qLkFRMzWAYBwfECGJuNDqNNb205SSq/AsM5u9CmTzOQAn1Ilil2XwauHWgmcWsdSPCLA5SbXHnaR7KffjF7GcGfCUcjHS7FRzGY38Wg1sFHLbadJE+zaTicMLebyRESUEREBERAREQEREBERAREQEREBERApVQNgB6SqIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgf/2Q==",
    },
    {
      name: "Mars",
      price: 1000,
      image:
      "https://i0.wp.com/www.nutshouse.in/wp-content/uploads/2022/05/208780.jpg",
    },
  ];
  
  function PrintProducts() {
    const productsContainer = document.getElementById("products");
    let newDiv = "";
  
    for (let i = 0; i < products.length; i++) {
      const product = products[i];
      const div = document.createElement("div");
      div.classList.add("product");
      div.innerHTML = `
        <img class='productImage' src="${product.image}"
        <h3 class="title">${product.name}</h3>
        <p>${product.description}</p>
        <p id="price">${product.price}</p>
        <button onclick="AddItem('${product.name}')">add</button>
        <button onclick="MinusItem('${product.name}')">minus</button>
      `;
  
      newDiv += div.outerHTML;
    }
  
    productsContainer.innerHTML = newDiv;
  }
  
  window.onload = PrintProducts;
  
  const userbasket = [];
  
  function AddItem(itemName) {
    const itemIndex = userbasket.findIndex((item) => item.name === itemName);
  
    if (itemIndex !== -1) {
      userbasket[itemIndex].quantity += 1;
    } else {
      userbasket.push({ name: itemName, quantity: 1 });
    }
  
    Basket();
  }
  
  function MinusItem(itemName) {
    const itemIndex = userbasket.findIndex((item) => item.name === itemName);
  
    if (itemIndex !== -1) {
      userbasket[itemIndex].quantity -= 1;
  
      if (userbasket[itemIndex].quantity === 0) {
        userbasket.splice(itemIndex, 1);
      }
    }
  
    Basket();
  }
  
  function Purchase() {
    let total = 0;
    for (let i = 0; i < userbasket.length; i++) {
      const { name, quantity } = userbasket[i];
      const product = products.find((p) => p.name === name);
      if (product) {
        total += product.price * quantity;
      }
    }
  
    document.getElementById("total").innerHTML = total;
    Clear();
  }
  
  function Clear() {
    userbasket = [];
  }
  
  function Basket() {
    const basketDiv = document.getElementById("basket");
    const basketHtml = userbasket
      .map(
        ({ name, quantity }) => `
      <h1>${name} - ${quantity}</h1>
    `
      )
      .join("");
    basketDiv.innerHTML = basketHtml;
  }
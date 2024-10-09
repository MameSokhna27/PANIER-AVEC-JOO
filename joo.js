
//1.Créez une classe d'objet pour le produit afin de stocker les propriétés pour l'id, le nom et le prix du produit.
//2.Créez une classe d'objet pour l'élément du panier d'achat afin de stocker les propriétés pour le produit et sa quantité.

class Produit {
  constructor(id, nom, prix) {
      this.id = id;
      this.nom = nom;
      this.prix = prix;
      this.quantite = 0;
  }
  // Ajouter des éléments
  increment() {
      this.quantite++;
  }
  
  decrement() {
      if (this.quantite > 0) {
          this.quantite--;
      }
  }
//Calcul du prix total de l'élément
  Prixtotal() {
      return this.prix * this.quantite;
  }
}
//	4. Créez une autre classe d'objet pour le panier d'achat qui contient un tableau d'instances de ShoppingCartItem.
class ShoppingCart {
  constructor() {
      this.items = [];
  }

  addProduct(product) {
    this.items.push(product);
}
  
//Obtenir le total des éléments à l'intérieur du panier

  Total() {
      return this.items.reduce((sum, item) => sum + item.Prixtotal(), 0);
  }
  // Supprimer le produit du panier
  removeProduct(productId) {
    this.items = this.items.filter(item => item.id !== productId);
  }

//	 Afficher les éléments du panier
  afficher() {
      document.getElementById("Ptotal").innerText = this.Total().toString() + ' $ ';
      this.afficherItems()
  }
  
}
  
let Produit1 = new Produit(1, "baskets", 100);
let Produit2 = new Produit(2, "socks", 20);
let Produit3 = new Produit(3, "bag", 50);

let panier = new ShoppingCart();
panier.addProduct(Produit1);
panier.addProduct(Produit2);
panier.addProduct(Produit3);

// Pour baskets

document.getElementById('plus').addEventListener('click', () => {
  Produit1.increment();
  document.getElementById('baskets').innerText = Produit1.quantite;
  panier.afficher();
});

document.getElementById('minus').addEventListener('click', () => {
  Produit1.decrement();
  document.getElementById('baskets').innerText = Produit1.quantite;
  panier.afficher();
});
document.getElementById('sup').addEventListener('click', () => {
  panier.removeProduct(Produit1.id)
  Produit1.quantite = 0
  document.getElementById('baskets').innerText = Produit1.quantite
  panier.afficher()
});

// Pour socks
document.getElementById('plus1').addEventListener('click', () => {
  Produit2.increment();
  document.getElementById('socks').innerText = Produit2.quantite;
  panier.afficher();
});

document.getElementById('minus1').addEventListener('click', () => {
  Produit2.decrement();
  document.getElementById('socks').innerText = Produit2.quantite;
  panier.afficher();
});

document.getElementById('sup1').addEventListener('click', () => {
  panier.removeProduct(Produit2.id)
  Produit2.quantite = 0
  document.getElementById('socks').innerText = Produit2.quantite
  panier.afficher()
});


// Pour bag

document.getElementById('plus2').addEventListener('click', () => {
  Produit3.increment();
  document.getElementById('bag').innerText = Produit3.quantite;
  panier.afficher();
});

document.getElementById('minus2').addEventListener('click', () => {
  Produit3.decrement();
  document.getElementById('bag').innerText = Produit3.quantite;
  panier.afficher();
});

document.getElementById('sup2').addEventListener('click', () => {
  panier.removeProduct(Produit3.id)
  Produit3.quantite = 0
  document.getElementById('bag').innerText = Produit3.quantite; 
  panier.afficher()
})
panier.afficher();

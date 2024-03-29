class Produto{

    constructor(){
        this.id = 1;
        this.arrayProdutos = []
    }

    salvar(){
        let produto = this.lerDados();

        if(this.validaCampo(produto)) {
            this.adicionar(produto)
        }

        this.listaTabela();
        this.cancelar();

    }
    listaTabela(){
        let tbody = document.getElementById('tbody')

        tbody.innerText = ''

        for(let i = 0; i < this.arrayProdutos.length; i++){
            let tr = tbody.insertRow();

            let td_id = tr.insertCell();
            let td_produto = tr.insertCell();
            let td_valor = tr.insertCell();
            let td_acoes = tr.insertCell();

            td_id.innerText = this.arrayProdutos[i].id;
            td_produto.innerText = this.arrayProdutos[i].nomeProduto;
            td_valor.innerText = this.arrayProdutos[i].preco;

            td_id.classList.add('center')

            let imgEdit = document.createElement('img');
            imgEdit.src = 'Imagens/editar.png';

            let imgDelet = document.createElement('img');
            imgDelet.src = 'Imagens/bin.png';
            imgDelet.setAttribute("onclick", "produto.deletar("+ this.arrayProdutos [i].id +" )")

            
            td_acoes.appendChild(imgEdit);
            td_acoes.appendChild(imgDelet);
        }
    }




    adicionar(produto){
        this.arrayProdutos.push(produto);
        this.id++;
    }



    lerDados(){
        let produto = {}
    
        produto.id = this.id;
        produto.nomeProduto = document.getElementById('produto').value;
        produto.preco = document.getElementById('preco').value;
        
        return produto;
    }

    validaCampo(produto){
        let msg = '';
        if(produto.nomeProduto == ''){
            msg += ' - Informe o nome do produto. \n'
        }
        if(produto.preco == ''){
            msg += ' - Informe o preço do produto. \n'
        }

        if(msg != ''){
            alert(msg);
            return false
        }
        return true
    }

    cancelar(){
        document.getElementById('produto').value = '';
        document.getElementById('preco').value = '';

    }
deletar(){
    alert('deletar')
}
}




var produto = new Produto();
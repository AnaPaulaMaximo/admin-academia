// document.addEventListener('DOMContentLoaded', function () {
//     const form = document.getElementById('form-cliente');
//     const lista = document.getElementById('lista-clientes');
//     const btnCadastrar = document.getElementById('btn-cadastrar');
//     const btnEditar = document.getElementById('btn-editar');
//     let clientes = [];
//     let clienteEmEdicao = null;

//     function renderizarClientes() {
//         lista.innerHTML = '';

//         const filtroNome = document.getElementById('filtro-nome').value.toLowerCase();
//         const filtroCpf = document.getElementById('filtro-cpf').value.toLowerCase();
//         const filtroStatus = document.getElementById('filtro-status').value;
//         const filtroPlano = document.getElementById('filtro-plano').value;

//         const clientesFiltrados = clientes.filter(cliente => {
//             return (
//                 cliente.nome.toLowerCase().includes(filtroNome) &&
//                 cliente.cpf.toLowerCase().includes(filtroCpf) &&
//                 (filtroStatus === "" || cliente.status.toString() === filtroStatus) &&
//                 (filtroPlano === "" || cliente.plano === filtroPlano)
//             );
//         });

//         clientesFiltrados.forEach((cliente) => {
//             lista.innerHTML += `
//                 <tr>
//                     <td class="py-2 px-4">${cliente.nome}</td>
//                     <td class="py-2 px-4">${cliente.cpf}</td>
//                     <td class="py-2 px-4">${cliente.status ? 'Ativo' : 'Inativo'}</td>
//                     <td class="py-2 px-4">${cliente.plano}</td>
//                     <td class="py-2 px-4">
//                         <img src="${cliente.foto_url}" alt="Foto" class="w-12 h-12 rounded-full" />
//                     </td>
//                     <td class="py-2 px-4 flex gap-3">
//                         <button onclick="editarCliente(${cliente.id})" class="text-yellow-300 hover:text-yellow-400">
//                             <i data-lucide="edit" class="w-5 h-5"></i>
//                         </button>
//                         <button onclick="excluirCliente(${cliente.id})" class="text-red-400 hover:text-red-500">
//                             <i data-lucide="trash-2" class="w-5 h-5"></i>
//                         </button>
//                     </td>
//                 </tr>
//             `;
//         });

//         lucide.createIcons();
//     }

//     form.addEventListener('submit', e => {
//         e.preventDefault();

//         const nome = document.getElementById('nome').value.trim();
//         const cpf = document.getElementById('cpf').value.trim();
//         const statusValor = document.getElementById('status').value;
//         const plano = document.getElementById('plano').value;
//         const foto_url = document.getElementById('foto_url').value.trim();

//         // Validação para garantir que todos os campos estejam preenchidos corretamente
//         if (!nome || !cpf || !statusValor || !plano) {
//             alert("Por favor, preencha todos os campos obrigatórios.");
//             return;
//         }

//         const status = statusValor === 'true';

//         const dadosCliente = { nome, cpf, status, plano, foto_url };

//         if (clienteEmEdicao) {
//             fetch(`https://projeto-academia-nu.vercel.app/clientes/${clienteEmEdicao.id}`, {
//                 method: 'PUT',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify(dadosCliente),
//             })
//                 .then(response => {
//                     if (!response.ok) {
//                         return response.json().then(data => { throw new Error(data.mensagem); });
//                     }
//                     return response.json();
//                 })
//                 .then(data => {
//                     alert(data.mensagem);
//                     clienteEmEdicao = null;
//                     form.reset();
//                     btnCadastrar.style.display = 'inline-block';
//                     btnEditar.style.display = 'none';
//                     fetchClientes();
//                 })
//                 .catch(error => {
//                     alert('Erro ao editar cliente: ' + error.message);
//                     console.error(error);
//                 });
//         } else {
//             fetch('https://projeto-academia-nu.vercel.app/clientes', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify(dadosCliente),
//             })
//                 .then(response => response.json())
//                 .then(data => {
//                     alert(data.mensagem);
//                     form.reset();
//                     fetchClientes();
//                 })
//                 .catch(error => {
//                     alert('Erro ao adicionar cliente');
//                     console.error(error);
//                 });
//         }
//     });

//     window.excluirCliente = function (id) {
//         fetch(`https://projeto-academia-nu.vercel.app/clientes/${id}`, {
//             method: 'DELETE',
//         })
//             .then(response => response.json())
//             .then(data => {
//                 alert(data.mensagem);
//                 fetchClientes();
//             })
//             .catch(error => {
//                 alert('Erro ao excluir cliente');
//                 console.error(error);
//             });
//     };

//     window.editarCliente = function (id) {
//         const cliente = clientes.find(c => c.id === id);
//         if (!cliente) return;

//         document.getElementById('nome').value = cliente.nome;
//         document.getElementById('cpf').value = cliente.cpf;
//         document.getElementById('status').value = cliente.status ? 'true' : 'false';
//         document.getElementById('plano').value = cliente.plano;
//         document.getElementById('foto_url').value = cliente.foto_url;

//         btnCadastrar.style.display = 'none';
//         btnEditar.style.display = 'inline-block';
//         clienteEmEdicao = cliente;
//     };


//     form.addEventListener('submit', e => {
//         e.preventDefault();

//         const nome = document.getElementById('nome').value.trim();
//         const cpf = document.getElementById('cpf').value.trim();
//         const statusValor = document.getElementById('status').value;
//         const plano = document.getElementById('plano').value;
//         const foto_url = document.getElementById('foto_url').value.trim();

//         // Validação para garantir que todos os campos estejam preenchidos corretamente
//         if (!nome || !cpf || !statusValor || !plano) {
//             alert("Por favor, preencha todos os campos obrigatórios.");
//             return;
//         }



//         const status = statusValor === 'true';

//         const dadosCliente = { nome, cpf, status, plano, foto_url };

//         if (clienteEmEdicao) {
//             fetch(`https://projeto-academia-nu.vercel.app/clientes/${clienteEmEdicao.id}`, {
//                 method: 'PUT',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify(dadosCliente),
//             })
//             .then(response => response.json())
//             .then(data => {
//                 alert(data.mensagem);
//                 clienteEmEdicao = null;
//                 form.reset();
//                 btnCadastrar.style.display = 'inline-block';
//                 btnEditar.style.display = 'none';
//                 fetchClientes();
//             })
//             .catch(error => {
//                 alert('Erro ao editar cliente: ' + error.message);
//                 console.error(error);
//             });
//         } else {
//             fetch('https://projeto-academia-nu.vercel.app/clientes', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify(dadosCliente),
//             })
//             .then(response => response.json())
//             .then(data => {
//                 alert(data.mensagem);
//                 form.reset();
//                 fetchClientes();
//             })
//             .catch(error => {
//                 alert('Erro ao adicionar cliente');
//                 console.error(error);
//             });
//         }
//     });

//     function fetchClientes() {
//         fetch('https://projeto-academia-nu.vercel.app/clientes/lista')
//             .then(response => response.json())
//             .then(data => {
//                 clientes = data;
//                 renderizarClientes();
//             })
//             .catch(error => {
//                 alert('Erro ao carregar clientes');
//                 console.error(error);
//             });
//     }

//     document.getElementById('filtro-nome').addEventListener('input', renderizarClientes);
//     document.getElementById('filtro-cpf').addEventListener('input', renderizarClientes);
//     document.getElementById('filtro-status').addEventListener('change', renderizarClientes);
//     document.getElementById('filtro-plano').addEventListener('change', renderizarClientes);

//     fetchClientes();
// });


document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('form-cliente');
    const lista = document.getElementById('lista-clientes');
    const btnCadastrar = document.getElementById('btn-cadastrar');
    const btnEditar = document.getElementById('btn-editar');
    let clientes = [];
    let clienteEmEdicao = null;

    async function renderizarClientes() {
        lista.innerHTML = '';

        const filtroNome = document.getElementById('filtro-nome').value.toLowerCase();
        const filtroCpf = document.getElementById('filtro-cpf').value.toLowerCase();
        const filtroStatus = document.getElementById('filtro-status').value;
        const filtroPlano = document.getElementById('filtro-plano').value;

        const clientesFiltrados = clientes.filter(cliente => {
            return (
                cliente.nome.toLowerCase().includes(filtroNome) &&
                cliente.cpf.toLowerCase().includes(filtroCpf) &&
                (filtroStatus === "" || cliente.status.toString() === filtroStatus) &&
                (filtroPlano === "" || cliente.plano === filtroPlano)
            );
        });

        clientesFiltrados.forEach((cliente) => {
            lista.innerHTML += `    
                <tr>
                    <td class="py-2 px-4">${cliente.nome}</td>
                    <td class="py-2 px-4">${cliente.cpf}</td>
                    <td class="py-2 px-4">${cliente.status ? 'Ativo' : 'Inativo'}</td>
                    <td class="py-2 px-4">${cliente.plano}</td>
                    <td class="py-2 px-4">
                        <img src="${cliente.foto_url}" alt="Foto" class="w-12 h-12 rounded-full" />
                    </td>
                    <td class="py-2 px-4 flex gap-3">
                        <button onclick="editarCliente(${cliente.id})" class="text-yellow-300 hover:text-yellow-400">
                            <i data-lucide="edit" class="w-5 h-5"></i>
                        </button>
                        <button onclick="excluirCliente(${cliente.id})" class="text-red-400 hover:text-red-500">
                            <i data-lucide="trash-2" class="w-5 h-5"></i>
                        </button>
                    </td>
                </tr>
            `;
        });

        lucide.createIcons();
    }

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const nome = document.getElementById('nome').value.trim();
        const cpf = document.getElementById('cpf').value.trim();
        const statusValor = document.getElementById('status').value;
        const plano = document.getElementById('plano').value;
        const foto_url = document.getElementById('foto_url').value.trim();


        // Validação para garantir que todos os campos estejam preenchidos corretamente
        if (!nome || !cpf || !statusValor || !plano) {
            alert("Por favor, preencha todos os campos obrigatórios.");
            return;
        }

        // Validação para garantir que o CPF tenha 11 dígitos
        if (!/^\d{11}$/.test(cpf)) {
            alert("O CPF deve ter exatamente 11 dígitos numéricos.");
            return;
          }


        const status = statusValor === 'true';

        const dadosCliente = { nome, cpf, status, plano, foto_url };

        try {
            if (clienteEmEdicao) {
                const response = await fetch(`https://projeto-academia-nu.vercel.app/clientes/${clienteEmEdicao.id}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(dadosCliente),
                });
                const data = await response.json();
                if (!response.ok) throw new Error(data.mensagem);

                alert(data.mensagem);
                clienteEmEdicao = null;
                form.reset();
                btnCadastrar.style.display = 'inline-block';
                btnEditar.style.display = 'none';
                fetchClientes();
            } else {
                const response = await fetch('https://projeto-academia-nu.vercel.app/clientes', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(dadosCliente),
                });
                const data = await response.json();

                alert(data.mensagem);
                form.reset();
                fetchClientes();
            }
        } catch (error) {
            alert('Erro ao processar a requisição: ' + error.message);
            console.error(error);
        }
    });

    window.excluirCliente = async function (id) {
        try {
            const response = await fetch(`https://projeto-academia-nu.vercel.app/clientes/${id}`, {
                method: 'DELETE',
            });
            const data = await response.json();

            alert(data.mensagem);
            fetchClientes();
        } catch (error) {
            alert('Erro ao excluir cliente');
            console.error(error);
        }
    };

    window.editarCliente = function (id) {
        const cliente = clientes.find(c => c.id === id);
        if (!cliente) return;

        document.getElementById('nome').value = cliente.nome;
        document.getElementById('cpf').value = cliente.cpf;
        document.getElementById('status').value = cliente.status ? 'true' : 'false';
        document.getElementById('plano').value = cliente.plano;
        document.getElementById('foto_url').value = cliente.foto_url;

        btnCadastrar.style.display = 'none';
        btnEditar.style.display = 'inline-block';
        clienteEmEdicao = cliente;
    };

    async function fetchClientes() {
        try {
            const response = await fetch('https://projeto-academia-nu.vercel.app/clientes/lista');
            const data = await response.json();
            clientes = data;
            renderizarClientes();
        } catch (error) {
            alert('Erro ao carregar clientes');
            console.error(error);
        }
    }

    document.getElementById('filtro-nome').addEventListener('input', renderizarClientes);
    document.getElementById('filtro-cpf').addEventListener('input', renderizarClientes);
    document.getElementById('filtro-status').addEventListener('change', renderizarClientes);
    document.getElementById('filtro-plano').addEventListener('change', renderizarClientes);

    fetchClientes();
});

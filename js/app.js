let inputT = document.getElementById("input_tareas")
let botonT = document.getElementById("BottonAgregar")
let listaT = document.getElementById("ListaTareas")

cargarTareas();

botonT.addEventListener("click", async () => {

    let texto = inputT.value.trim();

    if (texto === "") return;

    const { error } = await supabaseClient
        .from("tasks")
        .insert([
            {
                title: texto
            }
        ]);

    if (error) {
        console.error(error);
        return;
    }

    let li = document.createElement("li");
    li.textContent = texto;
    listaT.appendChild(li);

    inputT.value = "";
    cargarTareas();
});

async function cargarTareas() {

    const { data, error } = await supabaseClient
        .from("tasks")
        .select("*");

    if (error) {
        console.error(error);
        return;
    }

    listaT.innerHTML = "";

    data.forEach(tarea => {
        let li = document.createElement("li");
        li.textContent = tarea.title;
        listaT.appendChild(li);
    });
}



import { useState } from "react";

function FormInput({onAddItem}) {
    const [name, setName] = useState('');
    // TODO: Ubah quantity ke integer jika ingin operasi angka, misal: useState(0)
    const [quantity, setQuantity] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        if (!name) return; // Guard Clause

        // TODO: Konversi quantity ke integer jika ingin operasi angka, misal: quantity: Number(quantity)
        const newItem ={name, quantity, checked: false, id: Date.now()};
        onAddItem(newItem);
        console.log(newItem)

        setName('');
        setQuantity('');
    }

    // const quantityNum = [...Array(20)].map((_, i) => (
    //     <option value={i + 1} key={i + 1} >
    //         {i + 1}
    //     </option>
    // ));

    return (    
        <form className="add-form" onSubmit={handleSubmit}>
            <h3>Hari ini belanja apa kita?</h3>
            <div>
                {/* TODO: Ubah type ke number agar input hanya angka, dan pastikan value dikonversi ke integer saat submit */}
                <input type="text" placeholder="jumlah barang..." className="jumlah-barang" value={quantity} onChange={(e) => setQuantity(e.target.value)}/>
                <input type="text" placeholder="nama barang..." value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <button>Tambah</button>
        </form>
    )
}

export default FormInput;

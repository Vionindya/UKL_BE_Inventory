-- CreateTable
CREATE TABLE `Peminjaman` (
    `id_peminjaman` INTEGER NOT NULL AUTO_INCREMENT,
    `id_user` INTEGER NOT NULL,
    `id_barang` INTEGER NOT NULL,
    `qty` INTEGER NOT NULL,
    `borrow_date` DATE NOT NULL,
    `return_date` DATE NOT NULL,
    `status` ENUM('kembali', 'dipinjam') NOT NULL DEFAULT 'dipinjam',

    PRIMARY KEY (`id_peminjaman`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Peminjaman` ADD CONSTRAINT `Peminjaman_id_barang_fkey` FOREIGN KEY (`id_barang`) REFERENCES `Barang`(`id_barang`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Peminjaman` ADD CONSTRAINT `Peminjaman_id_user_fkey` FOREIGN KEY (`id_user`) REFERENCES `User`(`id_user`) ON DELETE RESTRICT ON UPDATE CASCADE;

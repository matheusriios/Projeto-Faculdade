import BuscaArvoreBinaria from './classes/BuscaArvoreBinaria';
import Pilha from './classes/Pilha';

const arvoreArtista = new BuscaArvoreBinaria()


//Artista
arvoreArtista.insert('Maria', 'Sertanejo')
arvoreArtista.insert('Luan', 'Rock')
arvoreArtista.insert('Luiz', 'Pagode')
arvoreArtista.insert('Gomes', 'Samba')
arvoreArtista.insert('Pedro', 'Pagode')
arvoreArtista.insert('João', 'Sertanejo')
arvoreArtista.insert('Gustavo', 'Rock')
arvoreArtista.insert('Pedroca', 'Samba de roda')
arvoreArtista.insert('Ricardo', 'Pagodinho')
arvoreArtista.insert('Gabriel', 'Nao sei mais oq')

arvoreArtista.addAlbum('Maria', 'Eu Quero é Beber')
arvoreArtista.addAlbum('Luan', 'Are You Experienced')
arvoreArtista.addAlbum('Luiz', 'Black Sabbath')
arvoreArtista.addAlbum('Gomes', 'Ramones')
arvoreArtista.addAlbum('Gomes', 'Zézé e os forrozeiro')
arvoreArtista.addAlbum('Pedro', 'Boston')
arvoreArtista.addAlbum('João', 'Appetite For Destruction')
arvoreArtista.addAlbum('Gustavo', 'Definitely Maybe')
arvoreArtista.addAlbum('Pedroca', 'Is This It')
arvoreArtista.addAlbum('Ricardo', 'Pagodinho')
arvoreArtista.addAlbum('Gabriel', 'Pure Heroine')


arvoreArtista.addAlbum('João', 'Album 2')
arvoreArtista.addAlbum('Gustavo', 'Album 2')
arvoreArtista.addAlbum('Pedroca', 'Album 2')
arvoreArtista.addAlbum('Ricardo', 'Album 2')
arvoreArtista.addAlbum('Gabriel', 'Album 2')


arvoreArtista.addAlbum('João', 'Album 3')
arvoreArtista.addAlbum('Gustavo', 'Album 3')
arvoreArtista.addAlbum('Pedroca', 'Album 3')
arvoreArtista.addAlbum('Ricardo', 'Album 3')
arvoreArtista.addAlbum('Gabriel', 'Album 3')

arvoreArtista.addAlbum('João', 'Album 4')
arvoreArtista.addAlbum('Gustavo', 'Album 4')
arvoreArtista.addAlbum('Pedroca', 'Album 4')
arvoreArtista.addAlbum('Ricardo', 'Album 4')
arvoreArtista.addAlbum('Gabriel', 'Album 4')

arvoreArtista.getArtista('Maria').getAlbum(0).addMusica({ nome: '1 -  Vou Ter Que Superar ', path: 'https://youtube.com/embed/u548qyxRTBU'})
arvoreArtista.getArtista('Luan').getAlbum(0).addMusica({ nome: '2 - NOTIFICAÇÃO PREFERIDA ', path: 'https://www.youtube.com/embed/CxF1wrcGE4I'})
arvoreArtista.getArtista('Luiz').getAlbum(0).addMusica({ nome: '3 - Xand Avião', path: 'https://www.youtube.com/embed/1xXL3cjdoCQ'})
arvoreArtista.getArtista('Gomes').getAlbum(0).addMusica({ nome: '4 - Ally Brooke', path: 'https://www.youtube.com/embed/vrznHWJUNU0'})
arvoreArtista.getArtista('Pedro').getAlbum(0).addMusica({ nome: '5 - Ouvi Dizer', path: 'https://www.youtube.com/embed/_OwLvV9vD-I'})
arvoreArtista.getArtista('João').getAlbum(0).addMusica({ nome: '6 -  Now That I Found You', path: 'https://youtube.com/embed/u548qyxRTBU'})
arvoreArtista.getArtista('Gustavo').getAlbum(0).addMusica({ nome: '7 - Thaeme & Thiago – Nóis Combinou (Ao Vivo)', path: 'https://youtube.com/embed/u548qyxRTBU'})
arvoreArtista.getArtista('Pedroca').getAlbum(0).addMusica({ nome: '8 - Antony e Gabriel - BRUNINHA feat DJ Kevin (CLIPE OFICIAL)', path: 'https://www.youtube.com/embed/1xXL3cjdoCQ'})
arvoreArtista.getArtista('Ricardo').getAlbum(0).addMusica({ nome: '9 - Bebe Rexha - Last Hurrah (Official Music Video)', path: 'https://youtube.com/embed/u548qyxRTBU'})
arvoreArtista.getArtista('Gabriel').getAlbum(0).addMusica({ nome: 'MUSICA 1', path: 'https://www.youtube.com/embed/EGuGPJfHPjo'})
arvoreArtista.getArtista('Maria').getAlbum(0).addMusica({ nome: '2 -  Vou Ter Que Superar ', path: 'https://youtube.com/embed/u548qyxRTBU'})
arvoreArtista.getArtista('Luan').getAlbum(0).addMusica({ nome: '2 - NOTIFICAÇÃO PREFERIDA ', path: 'https://www.youtube.com/embed/CxF1wrcGE4I'})
arvoreArtista.getArtista('Luiz').getAlbum(0).addMusica({ nome: '3 - Xand Avião', path: 'https://www.youtube.com/embed/1xXL3cjdoCQ'})
arvoreArtista.getArtista('Gomes').getAlbum(0).addMusica({ nome: '4 - Ally Brooke', path: 'https://www.youtube.com/embed/vrznHWJUNU0'})
arvoreArtista.getArtista('Pedro').getAlbum(0).addMusica({ nome: '5 - Ouvi Dizer', path: 'https://www.youtube.com/embed/_OwLvV9vD-I'})
arvoreArtista.getArtista('João').getAlbum(0).addMusica({ nome: '6 -  Now That I Found You', path: 'https://youtube.com/embed/u548qyxRTBU'})
arvoreArtista.getArtista('Gustavo').getAlbum(0).addMusica({ nome: '7 - Thaeme & Thiago – Nóis Combinou (Ao Vivo)', path: 'https://youtube.com/embed/u548qyxRTBU'})
arvoreArtista.getArtista('Pedroca').getAlbum(0).addMusica({ nome: '8 - Antony e Gabriel - BRUNINHA feat DJ Kevin (CLIPE OFICIAL)', path: 'https://www.youtube.com/embed/1xXL3cjdoCQ'})
arvoreArtista.getArtista('Ricardo').getAlbum(0).addMusica({ nome: '9 - Bebe Rexha - Last Hurrah (Official Music Video)', path: 'https://youtube.com/embed/u548qyxRTBU'})
arvoreArtista.getArtista('Gabriel').getAlbum(0).addMusica({ nome: 'MUSICA 2', path: 'https://www.youtube.com/embed/_OwLvV9vD-I'})
arvoreArtista.getArtista('Maria').getAlbum(0).addMusica({ nome: '2 -  Vou Ter Que Superar ', path: 'https://youtube.com/embed/u548qyxRTBU'})
arvoreArtista.getArtista('Luan').getAlbum(0).addMusica({ nome: '2 - NOTIFICAÇÃO PREFERIDA ', path: 'https://www.youtube.com/embed/CxF1wrcGE4I'})
arvoreArtista.getArtista('Luiz').getAlbum(0).addMusica({ nome: '3 - Xand Avião', path: 'https://www.youtube.com/embed/1xXL3cjdoCQ'})
arvoreArtista.getArtista('Gomes').getAlbum(0).addMusica({ nome: '4 - Ally Brooke', path: 'https://www.youtube.com/embed/vrznHWJUNU0'})
arvoreArtista.getArtista('Pedro').getAlbum(0).addMusica({ nome: '5 - Ouvi Dizer', path: 'https://www.youtube.com/embed/_OwLvV9vD-I'})
arvoreArtista.getArtista('João').getAlbum(0).addMusica({ nome: '6 -  Now That I Found You', path: 'https://youtube.com/embed/u548qyxRTBU'})
arvoreArtista.getArtista('Gustavo').getAlbum(0).addMusica({ nome: '7 - Thaeme & Thiago – Nóis Combinou (Ao Vivo)', path: 'https://youtube.com/embed/u548qyxRTBU'})
arvoreArtista.getArtista('Pedroca').getAlbum(0).addMusica({ nome: '8 - Antony e Gabriel - BRUNINHA feat DJ Kevin (CLIPE OFICIAL)', path: 'https://www.youtube.com/embed/1xXL3cjdoCQ'})
arvoreArtista.getArtista('Ricardo').getAlbum(0).addMusica({ nome: '9 - Bebe Rexha - Last Hurrah (Official Music Video)', path: 'https://youtube.com/embed/u548qyxRTBU'})
arvoreArtista.getArtista('Gabriel').getAlbum(0).addMusica({ nome: 'Musica 8', path: 'https://www.youtube.com/embed/_OwLvV9vD-I'})
arvoreArtista.getArtista('Maria').getAlbum(0).addMusica({ nome: '2 -  Vou Ter Que Superar ', path: 'https://youtube.com/embed/u548qyxRTBU'})
arvoreArtista.getArtista('Luan').getAlbum(0).addMusica({ nome: '2 - NOTIFICAÇÃO PREFERIDA ', path: 'https://www.youtube.com/embed/CxF1wrcGE4I'})
arvoreArtista.getArtista('Luiz').getAlbum(0).addMusica({ nome: '3 - Xand Avião', path: 'https://www.youtube.com/embed/1xXL3cjdoCQ'})
arvoreArtista.getArtista('Gomes').getAlbum(0).addMusica({ nome: '4 - Ally Brooke', path: 'https://www.youtube.com/embed/vrznHWJUNU0'})
arvoreArtista.getArtista('Pedro').getAlbum(0).addMusica({ nome: '5 - Ouvi Dizer', path: 'https://www.youtube.com/embed/_OwLvV9vD-I'})
arvoreArtista.getArtista('João').getAlbum(0).addMusica({ nome: '6 -  Now That I Found You', path: 'https://youtube.com/embed/u548qyxRTBU'})
arvoreArtista.getArtista('Gustavo').getAlbum(0).addMusica({ nome: '7 - Thaeme & Thiago – Nóis Combinou (Ao Vivo)', path: 'https://youtube.com/embed/u548qyxRTBU'})
arvoreArtista.getArtista('Pedroca').getAlbum(0).addMusica({ nome: '8 - Antony e Gabriel - BRUNINHA feat DJ Kevin (CLIPE OFICIAL)', path: 'https://www.youtube.com/embed/1xXL3cjdoCQ'})
arvoreArtista.getArtista('Ricardo').getAlbum(0).addMusica({ nome: '9 - Bebe Rexha - Last Hurrah (Official Music Video)', path: 'https://youtube.com/embed/u548qyxRTBU'})
arvoreArtista.getArtista('Gabriel').getAlbum(0).addMusica({ nome: 'Musica 9', path: 'https://www.youtube.com/embed/_OwLvV9vD-I'})
arvoreArtista.getArtista('Maria').getAlbum(0).addMusica({ nome: '2 -  Vou Ter Que Superar ', path: 'https://youtube.com/embed/u548qyxRTBU'})
arvoreArtista.getArtista('Luan').getAlbum(0).addMusica({ nome: '2 - NOTIFICAÇÃO PREFERIDA ', path: 'https://www.youtube.com/embed/CxF1wrcGE4I'})
arvoreArtista.getArtista('Luiz').getAlbum(0).addMusica({ nome: '3 - Xand Avião', path: 'https://www.youtube.com/embed/1xXL3cjdoCQ'})


arvoreArtista.getArtista('João').getAlbum(1).addMusica({ nome: '6 -  Now That I Found You', path: 'https://youtube.com/embed/u548qyxRTBU'})
arvoreArtista.getArtista('Gustavo').getAlbum(1).addMusica({ nome: '7 - Thaeme & Thiago – Nóis Combinou (Ao Vivo)', path: 'https://youtube.com/embed/u548qyxRTBU'})
arvoreArtista.getArtista('Pedroca').getAlbum(1).addMusica({ nome: '8 - Antony e Gabriel - BRUNINHA feat DJ Kevin (CLIPE OFICIAL)', path: 'https://www.youtube.com/embed/1xXL3cjdoCQ'})
arvoreArtista.getArtista('Ricardo').getAlbum(1).addMusica({ nome: '9 - Bebe Rexha - Last Hurrah (Official Music Video)', path: 'https://youtube.com/embed/u548qyxRTBU'})
arvoreArtista.getArtista('Gabriel').getAlbum(1).addMusica({ nome: '10 - Naiara Azevedo - Rapariga Digital - DVD #NaiaraSunrise', path: 'https://www.youtube.com/embed/_OwLvV9vD-I'})
arvoreArtista.getArtista('João').getAlbum(1).addMusica({ nome: '6 -  Now That I Found You', path: 'https://youtube.com/embed/u548qyxRTBU'})
arvoreArtista.getArtista('Gustavo').getAlbum(1).addMusica({ nome: '7 - Thaeme & Thiago – Nóis Combinou (Ao Vivo)', path: 'https://youtube.com/embed/u548qyxRTBU'})
arvoreArtista.getArtista('Pedroca').getAlbum(1).addMusica({ nome: '8 - Antony e Gabriel - BRUNINHA feat DJ Kevin (CLIPE OFICIAL)', path: 'https://www.youtube.com/embed/1xXL3cjdoCQ'})
arvoreArtista.getArtista('Ricardo').getAlbum(1).addMusica({ nome: '9 - Bebe Rexha - Last Hurrah (Official Music Video)', path: 'https://youtube.com/embed/u548qyxRTBU'})
arvoreArtista.getArtista('Gabriel').getAlbum(1).addMusica({ nome: '10 - Naiara Azevedo - Rapariga Digital - DVD #NaiaraSunrise', path: 'https://www.youtube.com/embed/_OwLvV9vD-I'})
arvoreArtista.getArtista('João').getAlbum(1).addMusica({ nome: '6 -  Now That I Found You', path: 'https://youtube.com/embed/u548qyxRTBU'})
arvoreArtista.getArtista('Gustavo').getAlbum(1).addMusica({ nome: '7 - Thaeme & Thiago – Nóis Combinou (Ao Vivo)', path: 'https://youtube.com/embed/u548qyxRTBU'})
arvoreArtista.getArtista('Pedroca').getAlbum(1).addMusica({ nome: '8 - Antony e Gabriel - BRUNINHA feat DJ Kevin (CLIPE OFICIAL)', path: 'https://www.youtube.com/embed/1xXL3cjdoCQ'})
arvoreArtista.getArtista('Ricardo').getAlbum(1).addMusica({ nome: '9 - Bebe Rexha - Last Hurrah (Official Music Video)', path: 'https://youtube.com/embed/u548qyxRTBU'})
arvoreArtista.getArtista('Gabriel').getAlbum(1).addMusica({ nome: '10 - Naiara Azevedo - Rapariga Digital - DVD #NaiaraSunrise', path: 'https://www.youtube.com/embed/_OwLvV9vD-I'})
arvoreArtista.getArtista('João').getAlbum(1).addMusica({ nome: '6 -  Now That I Found You', path: 'https://youtube.com/embed/u548qyxRTBU'})
arvoreArtista.getArtista('Gustavo').getAlbum(1).addMusica({ nome: '7 - Thaeme & Thiago – Nóis Combinou (Ao Vivo)', path: 'https://youtube.com/embed/u548qyxRTBU'})
arvoreArtista.getArtista('Pedroca').getAlbum(1).addMusica({ nome: '8 - Antony e Gabriel - BRUNINHA feat DJ Kevin (CLIPE OFICIAL)', path: 'https://www.youtube.com/embed/1xXL3cjdoCQ'})
arvoreArtista.getArtista('Ricardo').getAlbum(1).addMusica({ nome: '9 - Bebe Rexha - Last Hurrah (Official Music Video)', path: 'https://youtube.com/embed/u548qyxRTBU'})
arvoreArtista.getArtista('Gabriel').getAlbum(1).addMusica({ nome: '10 - Naiara Azevedo - Rapariga Digital - DVD #NaiaraSunrise', path: 'https://www.youtube.com/embed/_OwLvV9vD-I'})
arvoreArtista.getArtista('João').getAlbum(1).addMusica({ nome: '6 -  Now That I Found You', path: 'https://youtube.com/embed/u548qyxRTBU'})
arvoreArtista.getArtista('Gustavo').getAlbum(1).addMusica({ nome: '7 - Thaeme & Thiago – Nóis Combinou (Ao Vivo)', path: 'https://youtube.com/embed/u548qyxRTBU'})
arvoreArtista.getArtista('Pedroca').getAlbum(1).addMusica({ nome: '8 - Antony e Gabriel - BRUNINHA feat DJ Kevin (CLIPE OFICIAL)', path: 'https://www.youtube.com/embed/1xXL3cjdoCQ'})
arvoreArtista.getArtista('Ricardo').getAlbum(1).addMusica({ nome: '9 - Bebe Rexha - Last Hurrah (Official Music Video)', path: 'https://youtube.com/embed/u548qyxRTBU'})
arvoreArtista.getArtista('Gabriel').getAlbum(1).addMusica({ nome: '10 - Naiara Azevedo - Rapariga Digital - DVD #NaiaraSunrise', path: 'https://www.youtube.com/embed/_OwLvV9vD-I'})
arvoreArtista.getArtista('João').getAlbum(1).addMusica({ nome: '6 -  Now That I Found You', path: 'https://youtube.com/embed/u548qyxRTBU'})
arvoreArtista.getArtista('Gustavo').getAlbum(1).addMusica({ nome: '7 - Thaeme & Thiago – Nóis Combinou (Ao Vivo)', path: 'https://youtube.com/embed/u548qyxRTBU'})
arvoreArtista.getArtista('Pedroca').getAlbum(1).addMusica({ nome: '8 - Antony e Gabriel - BRUNINHA feat DJ Kevin (CLIPE OFICIAL)', path: 'https://www.youtube.com/embed/1xXL3cjdoCQ'})
arvoreArtista.getArtista('Ricardo').getAlbum(1).addMusica({ nome: '9 - Bebe Rexha - Last Hurrah (Official Music Video)', path: 'https://youtube.com/embed/u548qyxRTBU'})
arvoreArtista.getArtista('Gabriel').getAlbum(1).addMusica({ nome: '10 - Naiara Azevedo - Rapariga Digital - DVD #NaiaraSunrise', path: 'https://www.youtube.com/embed/_OwLvV9vD-I'})
arvoreArtista.getArtista('João').getAlbum(1).addMusica({ nome: '6 -  Now That I Found You', path: 'https://youtube.com/embed/u548qyxRTBU'})
arvoreArtista.getArtista('Gustavo').getAlbum(1).addMusica({ nome: '7 - Thaeme & Thiago – Nóis Combinou (Ao Vivo)', path: 'https://youtube.com/embed/u548qyxRTBU'})
arvoreArtista.getArtista('Pedroca').getAlbum(1).addMusica({ nome: '8 - Antony e Gabriel - BRUNINHA feat DJ Kevin (CLIPE OFICIAL)', path: 'https://www.youtube.com/embed/1xXL3cjdoCQ'})
arvoreArtista.getArtista('Ricardo').getAlbum(1).addMusica({ nome: '9 - Bebe Rexha - Last Hurrah (Official Music Video)', path: 'https://youtube.com/embed/u548qyxRTBU'})
arvoreArtista.getArtista('Gabriel').getAlbum(1).addMusica({ nome: '10 - Naiara Azevedo - Rapariga Digital - DVD #NaiaraSunrise', path: 'https://www.youtube.com/embed/_OwLvV9vD-I'})
arvoreArtista.getArtista('João').getAlbum(1).addMusica({ nome: '6 -  Now That I Found You', path: 'https://youtube.com/embed/u548qyxRTBU'})
arvoreArtista.getArtista('Gustavo').getAlbum(1).addMusica({ nome: '7 - Thaeme & Thiago – Nóis Combinou (Ao Vivo)', path: 'https://youtube.com/embed/u548qyxRTBU'})
arvoreArtista.getArtista('Pedroca').getAlbum(1).addMusica({ nome: '8 - Antony e Gabriel - BRUNINHA feat DJ Kevin (CLIPE OFICIAL)', path: 'https://www.youtube.com/embed/1xXL3cjdoCQ'})
arvoreArtista.getArtista('Ricardo').getAlbum(1).addMusica({ nome: '9 - Bebe Rexha - Last Hurrah (Official Music Video)', path: 'https://youtube.com/embed/u548qyxRTBU'})
arvoreArtista.getArtista('Gabriel').getAlbum(1).addMusica({ nome: '10 - Naiara Azevedo - Rapariga Digital - DVD #NaiaraSunrise', path: 'https://www.youtube.com/embed/_OwLvV9vD-I'})
arvoreArtista.getArtista('João').getAlbum(1).addMusica({ nome: '6 -  Now That I Found You', path: 'https://youtube.com/embed/u548qyxRTBU'})
arvoreArtista.getArtista('Gustavo').getAlbum(1).addMusica({ nome: '7 - Thaeme & Thiago – Nóis Combinou (Ao Vivo)', path: 'https://youtube.com/embed/u548qyxRTBU'})
arvoreArtista.getArtista('Pedroca').getAlbum(1).addMusica({ nome: '8 - Antony e Gabriel - BRUNINHA feat DJ Kevin (CLIPE OFICIAL)', path: 'https://www.youtube.com/embed/1xXL3cjdoCQ'})
arvoreArtista.getArtista('Ricardo').getAlbum(1).addMusica({ nome: '9 - Bebe Rexha - Last Hurrah (Official Music Video)', path: 'https://youtube.com/embed/u548qyxRTBU'})
arvoreArtista.getArtista('Gabriel').getAlbum(1).addMusica({ nome: '10 - Naiara Azevedo - Rapariga Digital - DVD #NaiaraSunrise', path: 'https://www.youtube.com/embed/_OwLvV9vD-I'})
arvoreArtista.getArtista('João').getAlbum(1).addMusica({ nome: '6 -  Now That I Found You', path: 'https://youtube.com/embed/u548qyxRTBU'})
arvoreArtista.getArtista('Gustavo').getAlbum(1).addMusica({ nome: '7 - Thaeme & Thiago – Nóis Combinou (Ao Vivo)', path: 'https://youtube.com/embed/u548qyxRTBU'})
arvoreArtista.getArtista('Pedroca').getAlbum(1).addMusica({ nome: '8 - Antony e Gabriel - BRUNINHA feat DJ Kevin (CLIPE OFICIAL)', path: 'https://www.youtube.com/embed/1xXL3cjdoCQ'})
arvoreArtista.getArtista('Ricardo').getAlbum(1).addMusica({ nome: '9 - Bebe Rexha - Last Hurrah (Official Music Video)', path: 'https://youtube.com/embed/u548qyxRTBU'})
arvoreArtista.getArtista('Gabriel').getAlbum(1).addMusica({ nome: '10 - Naiara Azevedo - Rapariga Digital - DVD #NaiaraSunrise', path: 'https://www.youtube.com/embed/_OwLvV9vD-I'})


arvoreArtista.getArtista('João').getAlbum(2).addMusica({ nome: '6 -  Now That I Found You', path: 'https://youtube.com/embed/u548qyxRTBU'})
arvoreArtista.getArtista('Gustavo').getAlbum(2).addMusica({ nome: '7 - Thaeme & Thiago – Nóis Combinou (Ao Vivo)', path: 'https://youtube.com/embed/u548qyxRTBU'})
arvoreArtista.getArtista('Pedroca').getAlbum(2).addMusica({ nome: '8 - Antony e Gabriel - BRUNINHA feat DJ Kevin (CLIPE OFICIAL)', path: 'https://www.youtube.com/embed/1xXL3cjdoCQ'})
arvoreArtista.getArtista('Ricardo').getAlbum(2).addMusica({ nome: '9 - Bebe Rexha - Last Hurrah (Official Music Video)', path: 'https://youtube.com/embed/u548qyxRTBU'})
arvoreArtista.getArtista('Gabriel').getAlbum(2).addMusica({ nome: '10 - Naiara Azevedo - Rapariga Digital - DVD #NaiaraSunrise', path: 'https://www.youtube.com/embed/_OwLvV9vD-I'})
arvoreArtista.getArtista('João').getAlbum(2).addMusica({ nome: '6 -  Now That I Found You', path: 'https://youtube.com/embed/u548qyxRTBU'})
arvoreArtista.getArtista('Gustavo').getAlbum(2).addMusica({ nome: '7 - Thaeme & Thiago – Nóis Combinou (Ao Vivo)', path: 'https://youtube.com/embed/u548qyxRTBU'})
arvoreArtista.getArtista('Pedroca').getAlbum(2).addMusica({ nome: '8 - Antony e Gabriel - BRUNINHA feat DJ Kevin (CLIPE OFICIAL)', path: 'https://www.youtube.com/embed/1xXL3cjdoCQ'})
arvoreArtista.getArtista('Ricardo').getAlbum(2).addMusica({ nome: '9 - Bebe Rexha - Last Hurrah (Official Music Video)', path: 'https://youtube.com/embed/u548qyxRTBU'})
arvoreArtista.getArtista('Gabriel').getAlbum(2).addMusica({ nome: '10 - Naiara Azevedo - Rapariga Digital - DVD #NaiaraSunrise', path: 'https://www.youtube.com/embed/_OwLvV9vD-I'})
arvoreArtista.getArtista('João').getAlbum(2).addMusica({ nome: '6 -  Now That I Found You', path: 'https://youtube.com/embed/u548qyxRTBU'})
arvoreArtista.getArtista('Gustavo').getAlbum(2).addMusica({ nome: '7 - Thaeme & Thiago – Nóis Combinou (Ao Vivo)', path: 'https://youtube.com/embed/u548qyxRTBU'})
arvoreArtista.getArtista('Pedroca').getAlbum(2).addMusica({ nome: '8 - Antony e Gabriel - BRUNINHA feat DJ Kevin (CLIPE OFICIAL)', path: 'https://www.youtube.com/embed/1xXL3cjdoCQ'})
arvoreArtista.getArtista('Ricardo').getAlbum(2).addMusica({ nome: '9 - Bebe Rexha - Last Hurrah (Official Music Video)', path: 'https://youtube.com/embed/u548qyxRTBU'})
arvoreArtista.getArtista('Gabriel').getAlbum(2).addMusica({ nome: '10 - Naiara Azevedo - Rapariga Digital - DVD #NaiaraSunrise', path: 'https://www.youtube.com/embed/_OwLvV9vD-I'})
arvoreArtista.getArtista('João').getAlbum(2).addMusica({ nome: '6 -  Now That I Found You', path: 'https://youtube.com/embed/u548qyxRTBU'})
arvoreArtista.getArtista('Gustavo').getAlbum(2).addMusica({ nome: '7 - Thaeme & Thiago – Nóis Combinou (Ao Vivo)', path: 'https://youtube.com/embed/u548qyxRTBU'})
arvoreArtista.getArtista('Pedroca').getAlbum(2).addMusica({ nome: '8 - Antony e Gabriel - BRUNINHA feat DJ Kevin (CLIPE OFICIAL)', path: 'https://www.youtube.com/embed/1xXL3cjdoCQ'})
arvoreArtista.getArtista('Ricardo').getAlbum(2).addMusica({ nome: '9 - Bebe Rexha - Last Hurrah (Official Music Video)', path: 'https://youtube.com/embed/u548qyxRTBU'})
arvoreArtista.getArtista('Gabriel').getAlbum(2).addMusica({ nome: '10 - Naiara Azevedo - Rapariga Digital - DVD #NaiaraSunrise', path: 'https://www.youtube.com/embed/_OwLvV9vD-I'})
arvoreArtista.getArtista('João').getAlbum(2).addMusica({ nome: '6 -  Now That I Found You', path: 'https://youtube.com/embed/u548qyxRTBU'})
arvoreArtista.getArtista('Gustavo').getAlbum(2).addMusica({ nome: '7 - Thaeme & Thiago – Nóis Combinou (Ao Vivo)', path: 'https://youtube.com/embed/u548qyxRTBU'})
arvoreArtista.getArtista('Pedroca').getAlbum(2).addMusica({ nome: '8 - Antony e Gabriel - BRUNINHA feat DJ Kevin (CLIPE OFICIAL)', path: 'https://www.youtube.com/embed/1xXL3cjdoCQ'})
arvoreArtista.getArtista('Ricardo').getAlbum(2).addMusica({ nome: '9 - Bebe Rexha - Last Hurrah (Official Music Video)', path: 'https://youtube.com/embed/u548qyxRTBU'})
arvoreArtista.getArtista('Gabriel').getAlbum(2).addMusica({ nome: '10 - Naiara Azevedo - Rapariga Digital - DVD #NaiaraSunrise', path: 'https://www.youtube.com/embed/_OwLvV9vD-I'})
arvoreArtista.getArtista('João').getAlbum(2).addMusica({ nome: '6 -  Now That I Found You', path: 'https://youtube.com/embed/u548qyxRTBU'})
arvoreArtista.getArtista('Gustavo').getAlbum(2).addMusica({ nome: '7 - Thaeme & Thiago – Nóis Combinou (Ao Vivo)', path: 'https://youtube.com/embed/u548qyxRTBU'})
arvoreArtista.getArtista('Pedroca').getAlbum(2).addMusica({ nome: '8 - Antony e Gabriel - BRUNINHA feat DJ Kevin (CLIPE OFICIAL)', path: 'https://www.youtube.com/embed/1xXL3cjdoCQ'})
arvoreArtista.getArtista('Ricardo').getAlbum(2).addMusica({ nome: '9 - Bebe Rexha - Last Hurrah (Official Music Video)', path: 'https://youtube.com/embed/u548qyxRTBU'})
arvoreArtista.getArtista('Gabriel').getAlbum(2).addMusica({ nome: '10 - Naiara Azevedo - Rapariga Digital - DVD #NaiaraSunrise', path: 'https://www.youtube.com/embed/_OwLvV9vD-I'})
arvoreArtista.getArtista('João').getAlbum(2).addMusica({ nome: '6 -  Now That I Found You', path: 'https://youtube.com/embed/u548qyxRTBU'})
arvoreArtista.getArtista('Gustavo').getAlbum(2).addMusica({ nome: '7 - Thaeme & Thiago – Nóis Combinou (Ao Vivo)', path: 'https://youtube.com/embed/u548qyxRTBU'})
arvoreArtista.getArtista('Pedroca').getAlbum(2).addMusica({ nome: '8 - Antony e Gabriel - BRUNINHA feat DJ Kevin (CLIPE OFICIAL)', path: 'https://www.youtube.com/embed/1xXL3cjdoCQ'})
arvoreArtista.getArtista('Ricardo').getAlbum(2).addMusica({ nome: '9 - Bebe Rexha - Last Hurrah (Official Music Video)', path: 'https://youtube.com/embed/u548qyxRTBU'})
arvoreArtista.getArtista('Gabriel').getAlbum(2).addMusica({ nome: '10 - Naiara Azevedo - Rapariga Digital - DVD #NaiaraSunrise', path: 'https://www.youtube.com/embed/_OwLvV9vD-I'})
arvoreArtista.getArtista('João').getAlbum(2).addMusica({ nome: '6 -  Now That I Found You', path: 'https://youtube.com/embed/u548qyxRTBU'})
arvoreArtista.getArtista('Gustavo').getAlbum(2).addMusica({ nome: '7 - Thaeme & Thiago – Nóis Combinou (Ao Vivo)', path: 'https://youtube.com/embed/u548qyxRTBU'})
arvoreArtista.getArtista('Pedroca').getAlbum(2).addMusica({ nome: '8 - Antony e Gabriel - BRUNINHA feat DJ Kevin (CLIPE OFICIAL)', path: 'https://www.youtube.com/embed/1xXL3cjdoCQ'})
arvoreArtista.getArtista('Ricardo').getAlbum(2).addMusica({ nome: '9 - Bebe Rexha - Last Hurrah (Official Music Video)', path: 'https://youtube.com/embed/u548qyxRTBU'})
arvoreArtista.getArtista('Gabriel').getAlbum(2).addMusica({ nome: '10 - Naiara Azevedo - Rapariga Digital - DVD #NaiaraSunrise', path: 'https://www.youtube.com/embed/_OwLvV9vD-I'})
arvoreArtista.getArtista('João').getAlbum(2).addMusica({ nome: '6 -  Now That I Found You', path: 'https://youtube.com/embed/u548qyxRTBU'})
arvoreArtista.getArtista('Gustavo').getAlbum(2).addMusica({ nome: '7 - Thaeme & Thiago – Nóis Combinou (Ao Vivo)', path: 'https://youtube.com/embed/u548qyxRTBU'})
arvoreArtista.getArtista('Pedroca').getAlbum(2).addMusica({ nome: '8 - Antony e Gabriel - BRUNINHA feat DJ Kevin (CLIPE OFICIAL)', path: 'https://www.youtube.com/embed/1xXL3cjdoCQ'})
arvoreArtista.getArtista('Ricardo').getAlbum(2).addMusica({ nome: '9 - Bebe Rexha - Last Hurrah (Official Music Video)', path: 'https://youtube.com/embed/u548qyxRTBU'})
arvoreArtista.getArtista('Gabriel').getAlbum(2).addMusica({ nome: '10 - Naiara Azevedo - Rapariga Digital - DVD #NaiaraSunrise', path: 'https://www.youtube.com/embed/_OwLvV9vD-I'})
arvoreArtista.getArtista('João').getAlbum(2).addMusica({ nome: '6 -  Now That I Found You', path: 'https://youtube.com/embed/u548qyxRTBU'})
arvoreArtista.getArtista('Gustavo').getAlbum(2).addMusica({ nome: '7 - Thaeme & Thiago – Nóis Combinou (Ao Vivo)', path: 'https://youtube.com/embed/u548qyxRTBU'})
arvoreArtista.getArtista('Pedroca').getAlbum(2).addMusica({ nome: '8 - Antony e Gabriel - BRUNINHA feat DJ Kevin (CLIPE OFICIAL)', path: 'https://www.youtube.com/embed/1xXL3cjdoCQ'})
arvoreArtista.getArtista('Ricardo').getAlbum(2).addMusica({ nome: '9 - Bebe Rexha - Last Hurrah (Official Music Video)', path: 'https://youtube.com/embed/u548qyxRTBU'})
arvoreArtista.getArtista('Gabriel').getAlbum(2).addMusica({ nome: '10 - Naiara Azevedo - Rapariga Digital - DVD #NaiaraSunrise', path: 'https://www.youtube.com/embed/_OwLvV9vD-I'})


arvoreArtista.getArtista('João').getAlbum(3).addMusica({ nome: '6 -  Now That I Found You', path: 'https://youtube.com/embed/u548qyxRTBU'})
arvoreArtista.getArtista('Gustavo').getAlbum(3).addMusica({ nome: '7 - Thaeme & Thiago – Nóis Combinou (Ao Vivo)', path: 'https://youtube.com/embed/u548qyxRTBU'})
arvoreArtista.getArtista('Pedroca').getAlbum(3).addMusica({ nome: '8 - Antony e Gabriel - BRUNINHA feat DJ Kevin (CLIPE OFICIAL)', path: 'https://www.youtube.com/embed/1xXL3cjdoCQ'})
arvoreArtista.getArtista('Ricardo').getAlbum(3).addMusica({ nome: '9 - Bebe Rexha - Last Hurrah (Official Music Video)', path: 'https://youtube.com/embed/u548qyxRTBU'})
arvoreArtista.getArtista('Gabriel').getAlbum(3).addMusica({ nome: '10 - Naiara Azevedo - Rapariga Digital - DVD #NaiaraSunrise', path: 'https://www.youtube.com/embed/_OwLvV9vD-I'})
arvoreArtista.getArtista('João').getAlbum(3).addMusica({ nome: '6 -  Now That I Found You', path: 'https://youtube.com/embed/u548qyxRTBU'})
arvoreArtista.getArtista('Gustavo').getAlbum(3).addMusica({ nome: '7 - Thaeme & Thiago – Nóis Combinou (Ao Vivo)', path: 'https://youtube.com/embed/u548qyxRTBU'})
arvoreArtista.getArtista('Pedroca').getAlbum(3).addMusica({ nome: '8 - Antony e Gabriel - BRUNINHA feat DJ Kevin (CLIPE OFICIAL)', path: 'https://www.youtube.com/embed/1xXL3cjdoCQ'})
arvoreArtista.getArtista('Ricardo').getAlbum(3).addMusica({ nome: '9 - Bebe Rexha - Last Hurrah (Official Music Video)', path: 'https://youtube.com/embed/u548qyxRTBU'})
arvoreArtista.getArtista('Gabriel').getAlbum(3).addMusica({ nome: '10 - Naiara Azevedo - Rapariga Digital - DVD #NaiaraSunrise', path: 'https://www.youtube.com/embed/_OwLvV9vD-I'})
arvoreArtista.getArtista('João').getAlbum(3).addMusica({ nome: '6 -  Now That I Found You', path: 'https://youtube.com/embed/u548qyxRTBU'})
arvoreArtista.getArtista('Gustavo').getAlbum(3).addMusica({ nome: '7 - Thaeme & Thiago – Nóis Combinou (Ao Vivo)', path: 'https://youtube.com/embed/u548qyxRTBU'})
arvoreArtista.getArtista('Pedroca').getAlbum(3).addMusica({ nome: '8 - Antony e Gabriel - BRUNINHA feat DJ Kevin (CLIPE OFICIAL)', path: 'https://www.youtube.com/embed/1xXL3cjdoCQ'})
arvoreArtista.getArtista('Ricardo').getAlbum(3).addMusica({ nome: '9 - Bebe Rexha - Last Hurrah (Official Music Video)', path: 'https://youtube.com/embed/u548qyxRTBU'})
arvoreArtista.getArtista('Gabriel').getAlbum(3).addMusica({ nome: '10 - Naiara Azevedo - Rapariga Digital - DVD #NaiaraSunrise', path: 'https://www.youtube.com/embed/_OwLvV9vD-I'})
arvoreArtista.getArtista('João').getAlbum(3).addMusica({ nome: '6 -  Now That I Found You', path: 'https://youtube.com/embed/u548qyxRTBU'})
arvoreArtista.getArtista('Gustavo').getAlbum(3).addMusica({ nome: '7 - Thaeme & Thiago – Nóis Combinou (Ao Vivo)', path: 'https://youtube.com/embed/u548qyxRTBU'})
arvoreArtista.getArtista('Pedroca').getAlbum(3).addMusica({ nome: '8 - Antony e Gabriel - BRUNINHA feat DJ Kevin (CLIPE OFICIAL)', path: 'https://www.youtube.com/embed/1xXL3cjdoCQ'})
arvoreArtista.getArtista('Ricardo').getAlbum(3).addMusica({ nome: '9 - Bebe Rexha - Last Hurrah (Official Music Video)', path: 'https://youtube.com/embed/u548qyxRTBU'})
arvoreArtista.getArtista('Gabriel').getAlbum(3).addMusica({ nome: '10 - Naiara Azevedo - Rapariga Digital - DVD #NaiaraSunrise', path: 'https://www.youtube.com/embed/_OwLvV9vD-I'})
arvoreArtista.getArtista('João').getAlbum(3).addMusica({ nome: '6 -  Now That I Found You', path: 'https://youtube.com/embed/u548qyxRTBU'})
arvoreArtista.getArtista('Gustavo').getAlbum(3).addMusica({ nome: '7 - Thaeme & Thiago – Nóis Combinou (Ao Vivo)', path: 'https://youtube.com/embed/u548qyxRTBU'})
arvoreArtista.getArtista('Pedroca').getAlbum(3).addMusica({ nome: '8 - Antony e Gabriel - BRUNINHA feat DJ Kevin (CLIPE OFICIAL)', path: 'https://www.youtube.com/embed/1xXL3cjdoCQ'})
arvoreArtista.getArtista('Ricardo').getAlbum(3).addMusica({ nome: '9 - Bebe Rexha - Last Hurrah (Official Music Video)', path: 'https://youtube.com/embed/u548qyxRTBU'})
arvoreArtista.getArtista('Gabriel').getAlbum(3).addMusica({ nome: '10 - Naiara Azevedo - Rapariga Digital - DVD #NaiaraSunrise', path: 'https://www.youtube.com/embed/_OwLvV9vD-I'})
arvoreArtista.getArtista('João').getAlbum(3).addMusica({ nome: '6 -  Now That I Found You', path: 'https://youtube.com/embed/u548qyxRTBU'})
arvoreArtista.getArtista('Gustavo').getAlbum(3).addMusica({ nome: '7 - Thaeme & Thiago – Nóis Combinou (Ao Vivo)', path: 'https://youtube.com/embed/u548qyxRTBU'})
arvoreArtista.getArtista('Pedroca').getAlbum(3).addMusica({ nome: '8 - Antony e Gabriel - BRUNINHA feat DJ Kevin (CLIPE OFICIAL)', path: 'https://www.youtube.com/embed/1xXL3cjdoCQ'})
arvoreArtista.getArtista('Ricardo').getAlbum(3).addMusica({ nome: '9 - Bebe Rexha - Last Hurrah (Official Music Video)', path: 'https://youtube.com/embed/u548qyxRTBU'})
arvoreArtista.getArtista('Gabriel').getAlbum(3).addMusica({ nome: '10 - Naiara Azevedo - Rapariga Digital - DVD #NaiaraSunrise', path: 'https://www.youtube.com/embed/_OwLvV9vD-I'})
arvoreArtista.getArtista('João').getAlbum(3).addMusica({ nome: '6 -  Now That I Found You', path: 'https://youtube.com/embed/u548qyxRTBU'})
arvoreArtista.getArtista('Gustavo').getAlbum(3).addMusica({ nome: '7 - Thaeme & Thiago – Nóis Combinou (Ao Vivo)', path: 'https://youtube.com/embed/u548qyxRTBU'})
arvoreArtista.getArtista('Pedroca').getAlbum(3).addMusica({ nome: '8 - Antony e Gabriel - BRUNINHA feat DJ Kevin (CLIPE OFICIAL)', path: 'https://www.youtube.com/embed/1xXL3cjdoCQ'})
arvoreArtista.getArtista('Ricardo').getAlbum(3).addMusica({ nome: '9 - Bebe Rexha - Last Hurrah (Official Music Video)', path: 'https://youtube.com/embed/u548qyxRTBU'})
arvoreArtista.getArtista('Gabriel').getAlbum(3).addMusica({ nome: '10 - Naiara Azevedo - Rapariga Digital - DVD #NaiaraSunrise', path: 'https://www.youtube.com/embed/_OwLvV9vD-I'})
arvoreArtista.getArtista('João').getAlbum(3).addMusica({ nome: '6 -  Now That I Found You', path: 'https://youtube.com/embed/u548qyxRTBU'})
arvoreArtista.getArtista('Gustavo').getAlbum(3).addMusica({ nome: '7 - Thaeme & Thiago – Nóis Combinou (Ao Vivo)', path: 'https://youtube.com/embed/u548qyxRTBU'})
arvoreArtista.getArtista('Pedroca').getAlbum(3).addMusica({ nome: '8 - Antony e Gabriel - BRUNINHA feat DJ Kevin (CLIPE OFICIAL)', path: 'https://www.youtube.com/embed/1xXL3cjdoCQ'})
arvoreArtista.getArtista('Ricardo').getAlbum(3).addMusica({ nome: '9 - Bebe Rexha - Last Hurrah (Official Music Video)', path: 'https://youtube.com/embed/u548qyxRTBU'})
arvoreArtista.getArtista('Gabriel').getAlbum(3).addMusica({ nome: '10 - Naiara Azevedo - Rapariga Digital - DVD #NaiaraSunrise', path: 'https://www.youtube.com/embed/_OwLvV9vD-I'})
arvoreArtista.getArtista('João').getAlbum(3).addMusica({ nome: '6 -  Now That I Found You', path: 'https://youtube.com/embed/u548qyxRTBU'})
arvoreArtista.getArtista('Gustavo').getAlbum(3).addMusica({ nome: '7 - Thaeme & Thiago – Nóis Combinou (Ao Vivo)', path: 'https://youtube.com/embed/u548qyxRTBU'})
arvoreArtista.getArtista('Pedroca').getAlbum(3).addMusica({ nome: '8 - Antony e Gabriel - BRUNINHA feat DJ Kevin (CLIPE OFICIAL)', path: 'https://www.youtube.com/embed/1xXL3cjdoCQ'})
arvoreArtista.getArtista('Ricardo').getAlbum(3).addMusica({ nome: '9 - Bebe Rexha - Last Hurrah (Official Music Video)', path: 'https://youtube.com/embed/u548qyxRTBU'})
arvoreArtista.getArtista('Gabriel').getAlbum(3).addMusica({ nome: '10 - Naiara Azevedo - Rapariga Digital - DVD #NaiaraSunrise', path: 'https://www.youtube.com/embed/_OwLvV9vD-I'})



// recebe nome que for clicado com document.getby...
const root = arvoreArtista.getRootNode()
arvoreArtista.inorder(root)
var nomeArtista = ''
// console.log(listaAlbum)
// console.log(arvoreArtista)

// listar artista

setTimeout(() => {    
    
    //pega input
    //add evento "buscar"
    //busca na arvore 
    //exibe apenas o artista buscado
        
    const nomeArtista = document.querySelector('.nomeArtista')
    const btnPesquisar = document.querySelector('.btn-pesquisar')
    let countIndexNode = 0
    btnPesquisar.addEventListener('click', e => {
        var artistaClicked = arvoreArtista.getArtista(nomeArtista.value)            
        if(artistaClicked === null)
            return alert('Artista n existe')
        const listaArtista = document.querySelector('.lista-artista')            
        listaArtista.innerHTML += `<li data-toggle="modal" data-target="#modalExemplo" id=${countIndexNode++}>${artistaClicked.data}</li>`                                                    
        // captura primeiro album
        let atualAlbum = artistaClicked.getAlbum(0)      
        
        const modalBodyAlbum = document.querySelector('.modal-body-album')
        modalBodyAlbum.innerHTML = `Nome do album: ${atualAlbum.nome} - <button data-toggle="modal" data-target="#modalMusicas" type="button" class="btn btn-success btn-ver-musicas">Musicas</button>`
                    
        function getCurrent () {
            if (atualAlbum != null) {
                modalBodyAlbum.innerHTML = `Nome do album: ${atualAlbum.nome} - <button data-toggle="modal" data-target="#modalMusicas" type="button" class="btn btn-success btn-ver-musicas">Musicas</button>`
            }else {
                alert('Album n existe')
            }
        }

        // captura proximo album
        document.getElementById('next').addEventListener('click', (e) => {
            const nextAlbum = atualAlbum.next                
            atualAlbum = nextAlbum
            getCurrent()
        })            


        document.getElementById('prev').addEventListener('click', (e) => {
            const previousAlbum = atualAlbum.previous
            atualAlbum = previousAlbum
            getCurrent()
        })              

        document.querySelector('.btn-ver-musicas').addEventListener('click', (e) => {
            atualAlbum = artistaClicked.getAlbum(0)                                
            var musicas = atualAlbum.musicas                            
            let musica = musicas.pilha.pop()

            console.log(musica)
            document.querySelector('.modal-body-musicas').innerHTML = ''
            document.querySelector('.modal-body-musicas').innerHTML += `                                       
                            <div class="w-100 container d-flex flex-column"> 
                                <div>
                                    ${musica.nome}
                                    <iframe width="400" height="250" src=${musica.pathFile} frameborder="0" allowfullscreen></iframe>                            
                                    <button class="stop">Stop</button>
                                </div>
                            </div>
            `

            document.querySelectorAll('.stop').forEach(item => {
                item.addEventListener("click", e => {
                    
                    item.parentElement.remove()
                })
            })
        })

        window.playlist =  {                            
            getCurrent
        }
        // getCurrent()
        // clickNext()
        // clickPrev()  
    })

}, 1000)

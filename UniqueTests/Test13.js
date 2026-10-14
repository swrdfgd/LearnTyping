uniqueTests.push(13);
uniqueTestsTitles["13"] = 'Chess';

chessWords = [
	"pawn", "knight", "bishop", "rook", "queen", "king", 
	// A
  'Absolute pin', 'Active', 'Adjournment', 'Adjudication', 'Adjust', 'Advanced pawn', 
  'Advantage', 'Alekhine\'s gun', 'Algebraic notation', 'AlphaZero', 'Amateur', 
  'Anastasia\'s mate', 'Annotation', 'Announced mate', 'Anti-Sicilian', 'Arabian mate', 
  'Arbiter', 'Arena', 'Armageddon', 'Artificial castling', 'Attack', 'Attraction', 
  'Automaton', 'Atomic Chess',
  
  // B
  'Back-rank mate', 'Backward pawn', 'Bad bishop', 'Bare king', 'Basque chess', 
  'Battery', 'Bind', 'Bishop', 'Bishop pair', 'Bishops on opposite colors', 'Black', 
  'Blindfold chess', 'Blind pigs', 'Blitz chess', 'Blockade', 'Blocked position', 
  'Blunder', 'Board', 'Boden\'s mate', 'Book move', 'Botez gambit', 'Break', 
  'Breakthrough', 'Brilliancy', 'Bughouse chess', 'Bullet chess', 'Bye',
  
  // C
  'Calculate', 'Candidate Master', 'Candidate move', 'Capped piece', 'Capture', 
  'Castling', 'Castling long', 'Castling short', 'Casual game', 'Center', 
  'Centralization', 'Check', 'Checkmate', 'Chess', 'Chess clock', 'Chess notation', 
  'Chess variant', 'Chess960', 'Classical', 'Clearance', 'Closed game', 'Closed file', 
  'Combination', 'Compensation', 'Computer move', 'Connected pawns', 'Consolidation', 
  'Control of the center', 'Correspondence chess', 'Counterattack', 'Counterplay', 
  'Cramped', 'Critical position', 'Cross-check',
  
  // D - E
  'Decoy', 'Defense', 'Deflection', 'Demonstration board', 'Desperado', 'Development', 
  'Diagonal', 'Discovered attack', 'Discovered check', 'Double attack', 'Double check', 
  'Doubled pawns', 'Draw', 'Drawing weapon', 'Drawish', 'Dynamic', 'Elo rating system', 
  'En passant', 'Endgame', 'Endgame tablebase', 'Engine', 'En prise', 'Epaulette mate', 
  'Equal', 'Escape square', 'Exchange', 'Exchange sacrifice', 'Exhibition', 'Expanded center',
  
  // F - G
  'Fairy chess', 'Fast chess', 'FEN', 'Fianchetto', 'FIDE', 'FIDE Master', 'File', 
  'Fifty-move rule', 'First board', 'Fischer random chess', 'Flank', 'Flank opening', 
  'Flight square', 'Fool\'s mate', 'Forced move', 'Forced win', 'Fork', 'Fortress', 
  'Forward', 'Gambit', 'Game of the Century', 'God', 'Good bishop', 'Grandmaster', 
  'Grandmaster draw', 'Greek gift sacrifice',
  
  // H - L
  'Half-open file', 'Handicap', 'Hanging', 'Hanging pawns', 'Hole', 'Hypermodern', 
  'Immortal Game', 'Imbalance', 'Inaccuracy', 'Inactive', 'Increment', 'Initiative', 
  'Interpose', 'International Master', 'Interzonal', 'Intuition', 'Isolated pawn', 
  'Italian Game', 'J\'adoube', 'Key square', 'Kibitz', 'Kick', 'King', 'King hunt', 
  'King safety', 'Kingside', 'Knight', 'Knight\'s Tour', 'Knockout', 'Kriegspiel', 
  'Laws of Chess', 'Legal move', 'Legal\'s mate', 'Lever', 'Light squares', 
  'Light-square bishop', 'Line', 'Line clearance', 'Liquidation', 'Long diagonal', 
  'Lucena position', 'Luft', 'Losing the exchange',
  
  // M - O
  'Major piece', 'Majority', 'Master', 'Match', 'Mate', 'Mate in n', 'Material', 
  'Mating attack', 'Mating net', 'MCO', 'Middlegame', 'Miniature', 'Minor piece', 
  'Minority attack', 'Mobility', 'Move', 'Move order', 'Mysterious rook move', 
  'NN', 'Norm', 'Notation', 'Novelty', 'Occupation', 'Odds', 'Open file', 
  'Open game', 'Opening', 'Opening repertoire', 'Opposite-colored bishops', 
  'Opposition', 'Outpost', 'Outside passed pawn', 'Overboard', 'Overcalculation', 
  'Overextended', 'Overloaded', 'Overprotection', 'OTB',
  
  // P - R
  'Passed pawn', 'Passive', 'Pattern recognition', 'Pawn', 'Pawn break', 'Pawn chain', 
  'Pawn island', 'Pawn majority', 'Pawn minority', 'Pawn race', 'Pawn structure', 
  'Pawn storm', 'Performance rating', 'Perpetual check', 'PGN', 'Philidor position', 
  'Piece', 'Pin', 'Plan', 'Playable', 'Ply', 'Poisoned pawn', 'Positional', 
  'Positional play', 'Positional sacrifice', 'Post-mortem', 'Prepared variation', 
  'Prophylaxis', 'Promotion', 'Protected passed pawn', 'Pseudo-sacrifice', 'Push', 
  'Queen', 'Queening', 'Queenside', 'Quiet move', 'Rank', 'Rapid chess', 'Rating', 
  'Refutation', 'Relative pin', 'Remis', 'Resign', 'Result', 'Reti Opening', 
  'Romantic chess', 'Rook', 'Round-robin', 'Royal fork',
  
  // S - T
  'Sacrifice', 'Scholar\'s mate', 'Score', 'Scoresheet', 'Sealed move', 'Second', 
  'Semi-closed game', 'Semi-open game', 'Sham sacrifice', 'Short castling', 
  'Sicilian Defense', 'Simplification', 'Simultaneous exhibition', 'Skewer', 
  'Skittles', 'Smothered mate', 'Solid', 'Sortie', 'Space', 'Space advantage', 
  'Spanish Game', 'Spite check', 'Squeeze', 'Stalemate', 'Standard notation', 
  'Starting position', 'Strategy', 'Strongpoint', 'Strong square', 'Study', 
  'Study-like', 'Style', 'Swindle', 'Symmetry', 'System', 'Tactics', 'Takeback', 
  'Tarrasch rule', 'Tempo', 'Tension', 'Text move', 'Theoretical', 'Theoretical draw', 
  'Theory', 'Threat', 'Threefold repetition', 'Tiebreak', 'Time control', 
  'Time pressure', 'Touch-move rule', 'Tournament', 'Trade', 'Transposition', 'Trap', 
  'Trebuchet', 'Triangulation',
  
  // U - Z
  'Underpromotion', 'Unorthodox opening', 'Unsound', 'Variation', 'Waiting move', 
  'Weakness', 'Weak square', 'White', 'Windmill', 'Winning position', 
  'Winning the exchange', 'Woodpusher', 'World Champion', 'Wrong bishop', 
  'Wrong rook pawn', 'X-ray', 'Zeitnot', 'Zugzwang', 'Zwischenschach', 'Zwischenzug'
];

function generateRandomChessNotation() {
    const pieces = ["", "N", "B", "R", "Q", "K"]; // String kosong untuk Pion
    const files = ["a", "b", "c", "d", "e", "f", "g", "h"];
    const ranks = ["1", "2", "3", "4", "5", "6", "7", "8"];
    const promotions = ["=Q", "=R", "=B", "=N"];
    const checks = ["", "+", "#"];

    // Fungsi bantuan untuk mengambil elemen acak dari array
    const getRandom = (arr) => arr[Math.floor(Math.random() * arr.length)];

    // 1. Menangani Rokade (Castling) dengan probabilitas 5%
    if (Math.random() < 0.05) {
        const castling = Math.random() < 0.5 ? "O-O" : "O-O-O";
        return castling + getRandom(checks);
    }

    const piece = getRandom(pieces);
    const isCapture = Math.random() < 0.25; // 25% kemungkinan terjadi tangkapan
    let isPromotion = false;

    const targetFile = getRandom(files);
    const targetRank = getRandom(ranks);
    let move = "";

    // 2. Menangani pergerakan Pion
    if (piece === "") {
        // Pion hanya bisa promosi di baris 1 atau 8
        if (targetRank === "1" || targetRank === "8") {
            isPromotion = true;
        }

        if (isCapture) {
            // Ambil lajur acak yang berbeda dengan lajur target
            const startingFiles = files.filter(f => f !== targetFile);
            const startingFile = getRandom(startingFiles);
            move = `${startingFile}x${targetFile}${targetRank}`;
        } else {
            move = `${targetFile}${targetRank}`;
        }
    } 
    // 3. Menangani pergerakan Perwira
    else {
        let disambiguation = "";
        // 10% kemungkinan butuh pembeda (disambiguation) selain Raja
        if (Math.random() < 0.1 && piece !== "K") {
            const disambigType = Math.random();
            if (disambigType < 0.33) {
                disambiguation = getRandom(files); // Pembeda lajur
            } else if (disambigType < 0.66) {
                disambiguation = getRandom(ranks); // Pembeda baris
            } else {
                disambiguation = getRandom(files) + getRandom(ranks); // Pembeda lajur & baris
            }
        }

        const captureNotation = isCapture ? "x" : "";
        move = `${piece}${disambiguation}${captureNotation}${targetFile}${targetRank}`;
    }

    // 4. Tambahkan Promosi jika berlaku
    if (isPromotion) {
        move += getRandom(promotions);
    }

    // 5. Tambahkan Skak atau Skakmat
    move += getRandom(checks);

    return move;
}

// Menguji fungsi dengan mencetak 10 notasi acak
for (let i = 0; i < 10; i++) {
    console.log(generateRandomChessNotation());
}

function genTests13(){
 var hasil = chessWords[Math.floor(Math.random()*chessWords.length)];
 for (let i = 1; i < 15; i++){
	hasil += ' ' + chessWords[Math.floor(Math.random()*chessWords.length)].toLowerCase();
 }
 
 for (let i = 1; i < 10; i++){
	hasil += ' ' + generateRandomChessNotation();
 }
 
  for (let i = 1; i < 15; i++){
	hasil += ' ' + chessWords[Math.floor(Math.random()*chessWords.length)].toLowerCase();
 }

 return hasil
}

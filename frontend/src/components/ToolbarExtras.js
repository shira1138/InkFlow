import React, { useState } from 'react';
import { convertToRoman, convertFromRoman } from '../utils/romanNumerals';
import '../styles/ToolbarExtras.css';

function ToolbarExtras({ onInsert }) {
  const [showRomanConverter, setShowRomanConverter] = useState(false);
  const [romanInput, setRomanInput] = useState('');
  const [romanOutput, setRomanOutput] = useState('');

  const handleConvertToRoman = () => {
    const num = parseInt(romanInput);
    if (!isNaN(num) && num > 0) {
      const result = convertToRoman(num);
      setRomanOutput(result);
      if (onInsert) {
        onInsert(result);
      }
    }
  };

  const handleConvertFromRoman = () => {
    const result = convertFromRoman(romanInput);
    if (result > 0) {
      setRomanOutput(result.toString());
      if (onInsert) {
        onInsert(result.toString());
      }
    }
  };

  const romanNumerals = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 
                        'XI', 'XII', 'XIII', 'XIV', 'XV', 'XVI', 'XVII', 'XVIII', 'XIX', 'XX'];
  
  const romanLowercase = romanNumerals.map(r => r.toLowerCase());

  return (
    <div className="toolbar-extras">
      <div className="extras-section">
        <h4>Quick Actions</h4>
        
        {/* Quick Font Sizes */}
        <div className="quick-sizes">
          <label>Quick Sizes</label>
          <div className="size-buttons">
            <button className="size-btn small">Small 12px</button>
            <button className="size-btn normal">Normal 16px</button>
            <button className="size-btn large">Large 20px</button>
            <button className="size-btn xlarge">XLarge 24px</button>
            <button className="size-btn title">Title 32px</button>
          </div>
        </div>

        {/* Roman Numerals */}
        <div className="roman-converter">
          <label>Roman Numerals</label>
          <div className="converter-options">
            <button 
              className="converter-btn"
              onClick={() => setShowRomanConverter(!showRomanConverter)}
            >
              {showRomanConverter ? '▼ Hide' : '▶ Show'} Converter
            </button>
          </div>

          {showRomanConverter && (
            <div className="converter-panel">
              <div className="input-group">
                <input
                  type="text"
                  placeholder="Enter number or Roman numeral"
                  value={romanInput}
                  onChange={(e) => setRomanInput(e.target.value)}
                  className="converter-input"
                />
              </div>

              <div className="converter-buttons">
                <button 
                  onClick={handleConvertToRoman}
                  className="btn-convert"
                  title="Convert Arabic to Roman (e.g., 5 → V)"
                >
                  → Roman
                </button>
                <button 
                  onClick={handleConvertFromRoman}
                  className="btn-convert"
                  title="Convert Roman to Arabic (e.g., V → 5)"
                >
                  → Number
                </button>
              </div>

              {romanOutput && (
                <div className="converter-output">
                  Result: <strong>{romanOutput}</strong>
                </div>
              )}

              <div className="roman-presets">
                <label>Common Roman Numerals:</label>
                <div className="preset-uppercase">
                  {romanNumerals.map((numeral, i) => (
                    <button
                      key={i}
                      className="preset-btn"
                      onClick={() => {
                        setRomanOutput(numeral);
                        if (onInsert) onInsert(numeral);
                      }}
                      title={`${i + 1} in Roman numerals`}
                    >
                      {numeral}
                    </button>
                  ))}
                </div>
                
                <label>Lowercase Roman Numerals:</label>
                <div className="preset-lowercase">
                  {romanLowercase.map((numeral, i) => (
                    <button
                      key={i}
                      className="preset-btn lowercase"
                      onClick={() => {
                        setRomanOutput(numeral);
                        if (onInsert) onInsert(numeral);
                      }}
                      title={`${i + 1} in lowercase Roman numerals`}
                    >
                      {numeral}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ToolbarExtras;

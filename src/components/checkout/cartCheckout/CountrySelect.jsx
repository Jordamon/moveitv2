import React from 'react';
import Select from 'react-select';

const countryOptions = [
        { value: 'usa', label: 'United States' },
        { value: 'canada', label: 'Canada' },
        { value: 'uk', label: 'United Kingdom' },
        { value: 'australia', label: 'Australia' },
        { value: 'germany', label: 'Germany' },
        { value: 'france', label: 'France' },
        { value: 'spain', label: 'Spain' },
        { value: 'italy', label: 'Italy' },
        { value: 'japan', label: 'Japan' },
        { value: 'china', label: 'China' },
        { value: 'india', label: 'India' },
        { value: 'brazil', label: 'Brazil' },
        { value: 'mexico', label: 'Mexico' },
        { value: 'southafrica', label: 'South Africa' },
        { value: 'egypt', label: 'Egypt' },
        { value: 'russia', label: 'Russia' },
        { value: 'southkorea', label: 'South Korea' },
        { value: 'thailand', label: 'Thailand' },
        { value: 'argentina', label: 'Argentina' },
        { value: 'chile', label: 'Chile' },
        { value: 'nigeria', label: 'Nigeria' },
        { value: 'sweden', label: 'Sweden' },
        { value: 'switzerland', label: 'Switzerland' },
        { value: 'netherlands', label: 'Netherlands' },
        { value: 'belgium', label: 'Belgium' },
        { value: 'denmark', label: 'Denmark' },
        { value: 'norway', label: 'Norway' },
        { value: 'austria', label: 'Austria' },
        { value: 'ireland', label: 'Ireland' },
        { value: 'poland', label: 'Poland' },
        { value: 'portugal', label: 'Portugal' },
        { value: 'turkey', label: 'Turkey' },
        { value: 'greece', label: 'Greece' },
        { value: 'newzealand', label: 'New Zealand' },
        { value: 'singapore', label: 'Singapore' },
        { value: 'malaysia', label: 'Malaysia' },
        { value: 'indonesia', label: 'Indonesia' },
        { value: 'philippines', label: 'Philippines' },
        { value: 'vietnam', label: 'Vietnam' },
        { value: 'egypt', label: 'Egypt' },
        { value: 'israel', label: 'Israel' },
        { value: 'uae', label: 'United Arab Emirates' },
        { value: 'qatar', label: 'Qatar' },
        { value: 'saudiarabia', label: 'Saudi Arabia' },
        { value: 'kuwait', label: 'Kuwait' },
        { value: 'iraq', label: 'Iraq' },
        { value: 'iran', label: 'Iran' },
        { value: 'afghanistan', label: 'Afghanistan' },
        { value: 'pakistan', label: 'Pakistan' },
        { value: 'bangladesh', label: 'Bangladesh' },
];

class CountrySelectBox extends React.Component {
  state = {
    selectedOption: null,
  };

  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
  };

  render() {
    const { selectedOption } = this.state;

    return (
      <Select
        value={selectedOption}
        onChange={this.handleChange}
        options={countryOptions}
        placeholder="Select a country"
      />
    );
  }
}

export default CountrySelectBox;

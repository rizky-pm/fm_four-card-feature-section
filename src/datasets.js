import SupervisorIcon from './images/icon-supervisor.svg';
import TeamBuilderIcon from './images/icon-team-builder.svg';
import KarmaIcon from './images/icon-karma.svg';
import CalculatorIcon from './images/icon-calculator.svg';

export const specs = [
    {
        title: 'Supervisor',
        description: 'Monitors activity to identify project roadblocks',
        icon: `${SupervisorIcon}`,
        color: 'hsl(180, 62%, 55%)',
        gridArea: 'supervisor',
        top: '140px',
        animation: 'translateX(-6.25rem)',
    },
    {
        title: 'Team Builder',
        description:
            'Scans our talent network to create the optimal team for your project',
        icon: `${TeamBuilderIcon}`,
        color: 'hsl(0, 78%, 62%)',
        gridArea: 'teambuilder',
        top: '0',
        animation: 'translateY(-6.25rem)',
    },
    {
        title: 'Karma',
        description: 'Regularly evaluates our talent to ensure quality',
        icon: `${KarmaIcon}`,
        color: 'hsl(34, 97%, 64%)',
        gridArea: 'karma',
        top: '0',
        animation: 'translateY(6.25rem)',
    },
    {
        title: 'Calculator',
        description:
            'Uses data from past projects to provide better delivery estimates',
        icon: `${CalculatorIcon}`,
        color: 'hsl(212, 86%, 64%)',
        gridArea: 'calculator',
        top: '140px',
        animation: 'translateX(6.25rem)',
    },
];

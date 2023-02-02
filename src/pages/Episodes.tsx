import {fetchRickAndMorty, rickAndMortyCharacter, rickAndMortyEpisodes} from "../services/rickAndMorty";
import useSWR from 'swr';
import React from 'react';
import AntCard from "../components/AntCard";
import styles from './character.module.css'

interface EpisodesData {
    results: Array<{
        id: number;
        name: string;
        air_date: string;
        episode: string;
        character: string;
    }>;
}

export const Episodes: React.FC = () => {
    const { data, error } = useSWR<EpisodesData>(rickAndMortyEpisodes, fetchRickAndMorty, {
        suspense: false,
    });

    return (
        <>
            <h1>Character</h1>

            <div className={styles.container}>
                {data?.results.map((episode) => (
                    <AntCard  key={episode.id} name={episode.name} air_date={episode.air_date}  episode={episode.episode} character={episode.character}></AntCard>

                ))}
            </div>


        </>
    );
};

